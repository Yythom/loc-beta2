/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, memo, useMemo, } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Menu from "@/pages/menu";
import intl from 'react-intl-universal'
import zh_CN from '@/lang/zh_CN'
import en_US from '@/lang/en_US'
import Logo from "@/global-component/logo";
import { GlobalStateInterface } from "@/store/global_slice";
import useSlice from "@/hooks/useSlice";
import ThemeMode from "@/global-component/theme_mode";
import RouteComponentsMap, { basePath } from "@/pages/route";
// import ProBreadcrumb from "@/global-component/pro_breadcrumb";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const header = memo(() =>
  <div className="header fb">
    <Logo />
    <aside>
      <ThemeMode />
    </aside>
  </div>)

const App = () => {
  const [global_slice] = useSlice<GlobalStateInterface>();

  useMemo(() => {
    intl.init({
      warningHandler: (msg, detail) => {
        // console.log('intl错误', msg, detail);
      },
      currentLocale: global_slice?.lang,
      locales: {
        zh_CN,
        en_US,
      }
    })
  }, [global_slice?.lang])

  return (
    <div className="App">
      <Router>
        {/* <Route path={basePath} component={header} /> */}
        <div className="page flex">
          <div className="menu">
            <Route path={basePath} component={Menu} />
          </div>
          <div className="main">
            {/* <Route path='/' exact component={Login} /> */}
            {/* <Route path={basePath} component={ProBreadcrumb} /> */}
            {
              global_slice.user_route.map(e => {
                return <Fragment key={e.itemKey}>
                  {
                    e?.items?.map(child => {
                      return <Fragment key={child.itemKey}>
                        {RouteComponentsMap[child.itemKey]?.component}
                      </Fragment>
                    })
                  }
                  {RouteComponentsMap[e.itemKey]?.component}
                </Fragment>
              })
            }
          </div>
        </div>
      </Router >
    </div >
  );
}



export default App;



