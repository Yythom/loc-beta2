
/**
  * each project will use the "requester" function when request remote api
  * so this file would be included into your source file when compile
  * */
import type { Project } from 'ts-gear'

const projects: Project[] = [
  {
    /** 
     * 工程名，会在dest指定的文件夹中生成对应的工程名文件夹
     * */
    name: 'loc-services',
    source: 'http://8.218.63.145:9502/swagger/http.json',

    /** 
     * 目标文件夹，相对路径以当前'tsg.config.ts'为基准
     * */
    dest: 'service',

    importRequesterStatement: 'import xxx from "../../config"',

    /**
     * filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     *
     * 过滤api路径，比如某些工程中，某些api路径是不需要的，可以通过这个选项过滤掉，也可使用函数
     * */
    // apiFilter: /^\/api/,
    // * or use function
    // apiFilter: ({ pathname }) =>
    //   pathname.startsWith('/api/v1/admin')

    /**
     * filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     *
     * 是否优先使用 class 而不是 interface
     * */
    // preferClass: false,

    /**
     * @default false
     * when assigned true, the requester function will receive the "host"
     * defined in swagger
     *
     * 请求的url上是否带有host，跨域请求时需要
     * */
    // withHost: false,

    /**
     * @default false
     * when assigned true, the requester function will receive the "basePath" defined in swagger
     *
     * 请求的url上是否带有basePath
     * */
    // withBasePath: false,

    /**
     * @default true
     * ts-gear try to keep the generic type for all definition
     * but real world swagger doc has many bad definition
     * if generic type make some error
     * assign "false" to this option
     * ts-gear will not generate generic type
     * the process of generating typescript content will be more stable.
     *
     * 是否生成泛型，定义规范的文档推荐生成
     * 单有很多定义不规范的文档根本无法生成泛型，如果运行时报错，把这个改成false再试试
     * */
    // keepGeneric: true,

    /** if your swagger doc has some non english words in definitions keys or some $ref position,
     *
     * 如果你的swagger文档中有一些非英文字符，或者有$ref的位置，可以选择一个翻译引擎
     * */
    // translationEngine: 'baidu',

    /**
     * 是否导出请求函数的参数类型
     * @default false
    // shouldExportRequestOptionType: false,

    /**
     * 是否导出请求函数的返回值类型
     * @default false
    // shouldExportResponseType: false,

    /**
      * 是否生成mock请求函数，测试环境使用
      * @default false
    // shouldGenerateMock: false,

    /**
     * 输入内容的prettier配置
     * */
    // prettierConfig: {
    //   semi: false,
    // },

    /**
     * 输出函数的函数名自定义方法，如果指定将覆盖默认的生成规则
     * */
    // generateRequestFunctionName: (arg: GenerateRequestFunctionNameParameter) => string,

    /**
     * 自定义生成的请求函数内容，如果指定将覆盖默认的生成规则
     * 这个很少用到，除非有非常特殊的定制需求
     * */
    // generateRequestFunction?: (arg: GenerateRequestFunctionNameParameter) => string,

    /**
     * 如果需要输出js而非ts文件，请将这个选项设置为true
     * @default false
     * */
    // transformJS: false,

    /**
     * 是否使用缓存，远程文档地址失效需要重新生成时用得到
     * @default false
     * */
    // useCache: false,

    /**
     * 定制换行符，之前的版本从当前运行的操作系统获取换行符的行为是错误的，会使不同的人生成的文件内容不一致
     * 推荐设置为\n
     * 如果有特殊原因，可设置为'auto'，则跟随系统，例如windows则为'\r\n'，mac为'\r'
     * @default '\n'
     * */
    // EOL?: '\n' | '\r' | '\r\n' | 'auto',

    /** 
     * nullable为false时是否等同于非必填
     * 在一些后端项目中所有字段都是有的，但是他们用nullable来表示此字段是否必填
     * 用来影响字段的?生成
     * 如果指定为true，则所有没有nullable: true的字段都会被认为是必须的
     * @default false
     */
    // nullableFalseAsRequired?: boolean
  },
]

export default projects
