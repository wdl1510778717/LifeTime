//存储所有主数据的json
import userAvatar from "./images/home/userAvatar.jpg"
var baseData =
// 为了简化数据结构，一个用户是一个对象，存储用户的所有数据
{
    userId: "0001", //唯一用户id
    userNme: "", //用户姓名
    userSex: "", //用户性别
    logo: "三寸人间", //logo
    nckName: "爱裸睡的猪🐖", //用户昵称
    userAvatar: userAvatar, //用户头像
    isNotPhotoClick: true, //左侧没有点击，没点是true，点了状态为false，
    aboutDetils: "十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排名还在前几名。百度权重也变为0.之前群成员每天5个左右的增长速度，也渐渐变成5天一个。找了各种原因，删除了有问题的友链，也通知了其他博主暂时不换链接，一段时间下来，排名还是那样，没有变化。",
    navItem: [
        { name: "首页", url: "/home", min_modulePermission: true, max_modulePermission: true },
        { name: "文章", url: "/article", min_modulePermission: false, max_modulePermission: true },
        { name: "相册", url: "/photo", min_modulePermission: false, max_modulePermission: false },
        // { name: "留言", url: "/message", min_modulePermission: false, max_modulePermission: true },
        { name: "关于", url: "/about", min_modulePermission: false, max_modulePermission: true }
    ],
    aboutMeModule: {
        moduleTitle: "关于",
        modulePermission: true,
        nckName: "爱裸睡的猪🐖",
        userAvatar: userAvatar,
        details: "我很懒，就想趴在床上，恐怕每一个年轻人现在都是这么想的，嘿嘿大家都懂！。工作久了发现，精神上的食粮，对于我们也很种重要，所以每天推荐几篇文章，陶冶一下情操。",
    },
    photoBookModule: {
        moduleTitle: "相册",
        modulePermission: true,
        photoBookData: {
            leftBookData: [],
            allBookData: [{
                modulePermission: true,
                classPhotoBookId: 1,
                bookData: [{
                    photoBookId: 1,
                    classPhotoBookId: 1,
                    modulePermission: true,
                    title: "美丽的植物园",
                    desc: "亲近大自然，走进自然风光",
                    photoId: "",
                    backgroundImageName: "aboretum0007",
                    imageSrc: "./static/images/aboretum/",
                    router: "/photoDetails",
                    data: [
                        "aboretum0001",
                        "aboretum0002",
                        "aboretum0003",
                        "aboretum0004",
                        "aboretum0005",
                        "aboretum0006",
                        "aboretum0007",
                        "aboretum0008",
                        "aboretum0009",
                        "aboretum0010",
                        "aboretum0011",
                        "aboretum0012",
                        "aboretum0013",
                        "aboretum0014",
                        "aboretum0015",
                        "aboretum0016",
                        "aboretum0017",
                        "aboretum0018",
                        "aboretum0019",
                        "aboretum0020",
                        "aboretum0021",
                        "aboretum0022",
                        "aboretum0023",
                        "aboretum0024",
                        "aboretum0025",
                        "aboretum0026",
                        "aboretum0027",
                        "aboretum0028",
                        "aboretum0029",
                        "aboretum0030",
                        "aboretum0031",
                        "aboretum0032",
                        "aboretum0033",
                        "aboretum0034",
                        "aboretum0035",
                        "aboretum0036",
                        "aboretum0037",
                        "aboretum0038",
                        "aboretum0039",
                        "aboretum0040",
                        "aboretum0041",
                        "aboretum0042",
                        "aboretum0043",
                        "aboretum0044",
                        "aboretum0045",
                        "aboretum0046",
                        "aboretum0047",
                        "aboretum0048",
                        "aboretum0049",
                        "aboretum0050",
                    ],
                },],
            },
            {
                modulePermission: true,
                classPhotoBookId: 2,
                bookData: [{
                    photoBookId: 1,
                    classPhotoBookId: 2,
                    modulePermission: true,
                    title: "古风照片了解一下",
                    desc: "是不是很漂亮，最丑的是我",
                    photoId: "",
                    backgroundImageName: "antiquity0013",
                    imageSrc: "./static/images/antiquity/",
                    router: "/photoDetails",
                    data: [
                        "antiquity0001",
                        "antiquity0002",
                        "antiquity0003",
                        "antiquity0004",
                        "antiquity0005",
                        "antiquity0006",
                        "antiquity0007",
                        "antiquity0008",
                        "antiquity0009",
                        "antiquity0010"
                    ],
                },],
            },
            {
                modulePermission: true,
                classPhotoBookId: 3,
                bookData: [{
                    photoBookId: 1,
                    classPhotoBookId: 3,
                    modulePermission: true,
                    title: "我的那个她",
                    desc: "愿你永远18岁",
                    photoId: "",
                    backgroundImageName: "love0005",
                    imageSrc: "./static/images/love/",
                    router: "/photoDetails",
                    data: [
                        "love0001",
                        "love0002",
                        "love0003",
                        "love0004",
                        "love0005",
                        "love0006",
                        "love0007",
                        "love0008",
                        "love0009",
                        "love0010"
                    ],
                },],
            },
            {
                modulePermission: true,
                classPhotoBookId: 4,
                bookData: [{
                    photoBookId: 1,
                    classPhotoBookId: 4,
                    modulePermission: true,
                    title: "我的景物图片",
                    desc: "随手拍一些景物留作纪念",
                    photoId: "",
                    backgroundImageName: "scenery0016",
                    imageSrc: "./static/images/scenery/",
                    router: "/photoDetails",
                    data: [
                        "scenery0001",
                        "scenery0002",
                        "scenery0003",
                        "scenery0004",
                        "scenery0005",
                        "scenery0006",
                        "scenery0007",
                        "scenery0008",
                        "scenery0009",
                        "scenery0010",
                        "scenery0011",
                        "scenery0012",
                        "scenery0013",
                        "scenery0014",
                        "scenery0015",
                        "scenery0016",
                        "scenery0017",
                        "scenery0018",
                        "scenery0019",
                        "scenery0020",
                        "scenery0021",
                        "scenery0022",
                        "scenery0023",
                        "scenery0024"
                    ]
                },],
            }
            ],

        },
    },
    searchModule: {
        moduleTitle: "搜索",
        modulePermission: false,
    },
    classifyModule: {
        moduleTitle: "分类",
        modulePermission: true,
        data: [{
            classId: 1,
            classTitle: "文章",
            amount: 0,
        },
        {
            classId: 2,
            classTitle: "相册",
            amount: 0,
        },
        ]
    },
    recommendModule: {
        moduleTitle: "我的推荐",
        modulePermission: true,
        recommendData: []
    },
    linksModule: {
        moduleTitle: "友情链接",
        modulePermission: true,
        data: [{
            linkId: 1,
            linkTitle: "杨青的个人博客",
            href: "",
        }],
    },
    followMeModule: {
        moduleTitle: "关注我",
        modulePermission: false,
        data: [{
            id: 1,
            src: "./static/images/home/follow_me.jpg",
        }],
    },
    articleData: [{
        articleId: 1,
        articleTitle: "我推荐的书",
        src: "http://www.yangqq.com/d/file/blogs/2018-06-18/0daedba8782d1b87dd38d9914d9cee3f.png",
        isTop: true,
        subTitle: "我所知道的比较流行的博客系统有，wordpress，Z-Blog，emlog等，最流行的是worpress，主题多，插件多，所以选择wp的个人站长也很多。以上三个博客系统我都用过，用的时间最",
        details: `1、张爱玲：《倾城之恋》
        　　2、马格利特·杜拉斯：《情人》
        　　3、考林·麦卡洛：《荆棘鸟》
        　  4、村上春树：《挪威的森林》
        　　5、渡边淳一：《失乐园》《男人这东西》
        　　6、钱钟书：《围城》（婚姻的镜子）
        　　7、劳伦斯：《虹》《爱恋中的女人》《查太莱夫人的情人》
        　　8、泰戈尔：《飞鸟集》《草叶集》
        　　9、塞林格：《麦田里的守望者》
        　　10、米兰·昆德拉：《生命中不能承受之轻》《缓慢》
        　　11、西蒙娜·德·波伏娃：《第二性》
        　　12、雪儿·海蒂：《性学报告》
        　　13、德克旭贝里：《小王子》
        　　14、让我来成全你的幸福：小仲马《茶花女》
        　　15、灵魂的哲学与博爱：司汤达《红与黑》
        　　16、越过爱情，看见春暖花开：简·奥斯丁《傲慢与偏见》
        　　17、我爱你，与你无关：茨威格《一个陌生女人的来信》
        　　18、这简直像戏一样：威廉·莎士比亚《罗密欧与朱丽叶》
        　　19、爱永远不用说对不起：西格尔《爱情故事》
        　　20、山在那里，你的心碎了：岩井俊二《情书》
        　　21、充满暗礁的爱情海洋：加西亚·马尔克斯《霍乱时期的爱情》
        　　22、爱情终究成了一种传说：阿兰·德波顿《爱情笔记》
        　　23、温柔而坚强：夏洛蒂·勃朗特《简·爱》
        　　24、粉色的小爱情：堀川波《我就喜欢你这样的地方》
        　　25、有天堂，但是没有道路：北村《玛卓的爱情》
        　　26、美与爱是独立的：川端康成《雪国》
        　　27、难得糊涂的爱情与婚姻：列夫·托尔斯泰《安娜·卡列尼娜》
        　　28、战火中成长的美丽与坚强：玛格丽特·米切尔《飘》
        　　29、用哲学来思考：米兰·昆德拉《生命中不能承受之轻》
        　　30、奥德修斯式的传奇：雨果《悲惨世界》
        　　31、二十四小时，路过爱，走过禁区：霍桑《红字》
        　　32、最残酷的爱和最不忍的恨：曹禺《雷雨》
        　　33、值得付出一生的等待：帕斯捷尔纳克《日瓦戈医生》
        　　34、唤醒生命的人：海伦·凯勒《假如给我三天光明》
        　　35、只有渺小的人物，没有渺小的爱情：西奥多·德莱塞《珍妮姑娘》`,
    },
    {
        articleId: 2,
        articleTitle: "《咖啡般的人生》",
        src: "http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg",
        isTop: true,
        subTitle: "《咖啡般的人生 - 精品咖啡散文》",
        details: `
        <p>初秋的夜里，独自来到街角的咖啡屋，选择一个静谧的角落坐下，叫上一杯蓝山咖啡，慢慢品尝。无限想象的空间和一些寂寞，伴随着灯光，锁住了我游离的灵魂。</p>
        <p>微微透着寒意的深夜，昏黄的光晕下，缭绕的香气弥漫着我的影子。轻轻地搅动着手里的咖啡勺，静静地观察咖啡的波纹丝丝旋转，越搅越醇，越品越浓。苦涩中透着丝滑的香气，像是一位轻盈的女子在翩翩起舞。</p>
        <p>回忆是美好的，放任自己去找寻记忆的影子，就在这多情的夜里。我仿佛看见了自己一半明媚一半忧伤的踌躇。轻柔的音乐缓缓流淌，窗外皎洁明亮的月色，照亮了我纯净的心房。不加糖的咖啡里盛满了我不太完满的人生，我苦苦追寻的圆满在悲欢离合中一次次地破碎和迷失。想保存一份最初的纯真，却还是心碎地离开。</p>
        <p>再往杯里投下一块方糖，幻想着醇香而苦涩的咖啡里,能从此多一份香甜，温暖里少一些无法摆脱的苦涩。我再次轻轻地搅动着手里的长勺，有些焦急，也有些期待，期待着融化的方糖能在我失意的人生中投石点点，带来些许转变。</p>
        <p>只是瞬间，回过神来，轻轻舔着唇上残留的香味，甘甜早已消失不见，弥留的只有尝不尽的酸涩。咖啡很香，却也很苦，咖啡一般的人生里有伤痛沉淀下来的痕迹。总想褪去骨子里的苦涩，人为地改变生活本色，却怎样也褪不去最初的味道。</p>
        <p>沉淀，再沉淀，放弃浮躁的心，渐渐沉静下来。没有期待的醇香与甜美，只有忠于本色的对待。再轻轻啜饮一口，细细想来，咖啡亦如人生，永远都是有苦有甜的，透着看不见的醇香、浓郁，在岁月中褪去张扬与浮华，只剩下温和的心与宽广的胸怀容纳它。或许若干年后，会慢慢发觉：咖啡般的人生也如此香醇、静好。</p>
        `,
    },
    {
        articleId: 3,
        articleTitle: "一个三十而立的男程序员真实讲述：代码搅乱我的生活",
        src: "http://www.yangqq.com/d/file/news/life/2014-05-29/37b2762ee25cd73e39019c57eb6c6135.jpg",
        isTop: false,
        subTitle: "讲述者：李仲 31岁 程序员记录者：杨丁 记者 荆楚网四年如一日 生活沉闷我做了四年程序员。这是非常沉闷的一个工作，如果对这行有爱好，还觉得比较有乐趣。如果光是为糊口，",
        details: ``,
    },
    {
        articleId: 4,
        articleTitle: "抄袭门过后——丢掉心结，重拾自己",
        src: "http://www.yangqq.com/d/file/news/life/2014-05-29/37b2762ee25cd73e39019c57eb6c6135.jpg",
        isTop: false,
        subTitle: "说到抄袭，初中就发生了那么一件尴尬的事。我的作文在班上老师和同学一直都认为还不错，经常被拿到班上甚至其他班当范文。以《 微笑》为标题作文，两天时间我就是想不出微笑",
        details: ``,
    },
    {
        articleId: 5,
        articleTitle: "个人博客从简不繁",
        src: "https://www.yangqq.com/d/file/news/life/2018-11-11/706322d7b93c7a5fbb8ec43001aa32d7.jpg",
        isTop: false,
        subTitle: "十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排",
        details: ``,
    },
    {
        articleId: 6,
        articleTitle: "犯错了怎么办？",
        src: "http://www.yangqq.com/d/file/news/s/2014-04-09/0b5fad3a513ad04e92764533b772070c.jpg",
        isTop: false,
        subTitle: "引子：看到昔日好友发了一篇日志《咎由自取》他说他是一个悲观者，感觉社会抛弃了他，脾气、性格在6年的时间里变化很大，很难适应这个社会。人生其实就是不断犯错的过程，在",
        details: ``,
    },
    {
        articleId: 7,
        articleTitle: "作为一个设计师,如果遭到质疑你是否能恪守自己的原则?",
        src: "http://www.yangqq.com/d/file/news/life/2018-03-13/49962501843114c70121ad142e60a056.jpg",
        isTop: false,
        subTitle: "曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的",
        details: ``,
    },
    {
        articleId: 8,
        articleTitle: "《野蚂蚁》卜野 原创个人博客-撰写互联网人的工作与生活",
        src: "http://www.yangqq.com/d/file/blogs/2018-07-10/094f20095d26875c98d3370f5c04e67e.png",
        isTop: false,
        subTitle: "前往 卜野个人博客，站长名字叫，卜野，这两个字很有意思，刚开始我以为是他的网名，哪知，看了他博客的“关于我”，才知“卜野”是真名。他的个人",
        details: ``,
    },
    {
        articleId: 9,
        articleTitle: "安静地做一个爱设计的女子",
        src: "http://www.yangqq.com/d/file/news/life/2018-06-17/917d732926d79cc2ae1012831ce51d1e.jpg",
        isTop: false,
        subTitle: "自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢",
        details: ``,
    },
    {
        articleId: 10,
        articleTitle: "【匆匆那些年】总结个人博客经历的这四年",
        src: "http://www.yangqq.com/d/file/jstt/bj/2018-06-29/3f0b6da48a6fd4e626a021ff7bd0d74f.jpg",
        isTop: false,
        subTitle: "博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过&amp;hellip;但最后还是坚持了下来，时间如此匆匆，等再回过头",
        details: ``,
    },
    {
        articleId: 11,
        articleTitle: "《寻之旅》一个关于旅游，游记的个人博客",
        src: "http://www.yangqq.com/d/file/blogs/2018-05-27/a3f627dc6e35a53687da5e989491f16f.jpg",
        isTop: false,
        subTitle: "《寻之旅》www.searchtrip.cn 这是一个记录游记，旅游分享的个人博客，我们相识于3月份，一句“你可以先不要删我嘛”，还有海绵宝宝的头像，让我对他印象深刻。",
        details: ``,
    },
    ]
}
let leftBookData = baseData.photoBookModule.photoBookData.leftBookData;
let allBookData = baseData.photoBookModule.photoBookData.allBookData;
let lenArry = [];
allBookData.forEach(book => {
    book.bookData.forEach(item => {
        lenArry.push(item.data.length);
    });
});
let count = 0;
lenArry.forEach(element => {
    count += element;
});
baseData.classifyModule.data[0].amount = baseData.articleData.length;
baseData.classifyModule.data[1].amount = count;
baseData.photoBookModule.photoBookData.leftBookData.push(
    allBookData[0].bookData[0]
)
baseData.photoBookModule.photoBookData.leftBookData.push(
    allBookData[1].bookData[0]
)
baseData.photoBookModule.photoBookData.leftBookData.push(
    allBookData[2].bookData[0]
)
baseData.photoBookModule.photoBookData.leftBookData.push(
    allBookData[3].bookData[0]
)

baseData.recommendModule.recommendData = baseData.articleData.slice(0, 6)

export default baseData;