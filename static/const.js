//存储所有主数据的json\
var picUrl = "https://myphoto-1258761567.cos.ap-hongkong.myqcloud.com/"
var userAvatar = picUrl + "home/userAvatar.jpg"
var liUrl = picUrl + "home/li.png"
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
    aboutDetils: "",
    // aboutDetils: "人生易老难阻挡，且以文字约旧人。胸中若有诗书在，岁月从不败美人。斑驳的旧时光里，总有一些或深或浅沁人心肺的馨香，让人舍不得遗忘。阑珊的过往，不经意间邂逅了谁的眼眸；文字里泛舟，网络的尘缘里又与谁不期而遇？淡淡的墨香中，谁在翩然靠近？直抵心间的诗行，又是谁温暖了岁月？一切都是那么美、那么优雅、那么陶醉、那么质朴、那么精致。这不仅仅是文字的描摹，更是一种真诚的情感在绵延、在流动。光阴里，那些明媚或暗淡的曾经，总是伴着美丽的忧伤与成长的阵痛；日渐淡薄的往昔，也总能或多或少的在心里留下一丝清雅的执念。",
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
                    // imageSrc: "./static/images/aboretum/",
                    imageSrc: picUrl + "aboretum/",
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
                    imageSrc: picUrl + "antiquity/",
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
                        "antiquity0010",
                        "antiquity0011",
                        "antiquity0012",
                        "antiquity0013",
                        "antiquity0014",
                        "antiquity0015",
                        "antiquity0016",
                        "antiquity0017",
                        "antiquity0018",
                        "antiquity0019",
                        "antiquity0020",
                        "antiquity0021",
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
                    imageSrc: picUrl + "love/",
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
                    imageSrc: picUrl + "scenery/",
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
            linkTitle: "我的其他相册",
            href: "/photoOthers",
        }, {
            linkId: 2,
            linkTitle: "我的视频",
            href: "/video",
        }],
    },
    followMeModule: {
        moduleTitle: "关注我",
        modulePermission: false,
        data: [{
            id: 1,
            src: picUrl + "home/follow_me.jpg",
        }],
    },
    articleData: [{
        articleId: 1,
        articleTitle: "我推荐的书",
        src: "http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg",
        isTop: true,
        subTitle: "我觉得，当书本给我讲到闻所未闻，见所未见的人物、感情、思想和态度时，似乎是每一本书都在我面前打开了一扇窗户，让我看到一个不可思议的新世界。——高尔基",
        details: `
            <p class='paragraph'>1、张爱玲：《倾城之恋》</p><br/>
            <p class='paragraph'>2、马格利特·杜拉斯：《情人》</p><br/>
            <p class='paragraph'>3、考林·麦卡洛：《荆棘鸟》</p>
        　  <p class='paragraph'>4、村上春树：《挪威的森林》</p>
        　　<p class='paragraph'>5、渡边淳一：《失乐园》《男人这东西》</p>
        　　<p class='paragraph'>6、钱钟书：《围城》（婚姻的镜子）</p>
        　　<p class='paragraph'>7、劳伦斯：《虹》《爱恋中的女人》《查太莱夫人的情人》</p>
        　　<p class='paragraph'>8、泰戈尔：《飞鸟集》《草叶集》</p>
        　　<p class='paragraph'>9、塞林格：《麦田里的守望者》</p>
        　　<p class='paragraph'>10、米兰·昆德拉：《生命中不能承受之轻》《缓慢》</p>
        　　<p class='paragraph'>11、西蒙娜·德·波伏娃：《第二性》</p>
        　　<p class='paragraph'>12、雪儿·海蒂：《性学报告》</p>
        　　<p class='paragraph'>13、德克旭贝里：《小王子》</p>
        　　<p class='paragraph'>14、让我来成全你的幸福：小仲马《茶花女》</p>
        　　<p class='paragraph'>15、灵魂的哲学与博爱：司汤达《红与黑》</p>
        　　<p class='paragraph'>16、越过爱情，看见春暖花开：简·奥斯丁《傲慢与偏见》</p>
        　　<p class='paragraph'>17、我爱你，与你无关：茨威格《一个陌生女人的来信》</p>
        　　<p class='paragraph'>18、这简直像戏一样：威廉·莎士比亚《罗密欧与朱丽叶》</p>
        　　<p class='paragraph'>19、爱永远不用说对不起：西格尔《爱情故事》</p>
        　　<p class='paragraph'>20、山在那里，你的心碎了：岩井俊二《情书》</p>
        　　<p class='paragraph'>21、充满暗礁的爱情海洋：加西亚·马尔克斯《霍乱时期的爱情》</p>
        　　<p class='paragraph'>22、爱情终究成了一种传说：阿兰·德波顿《爱情笔记》</p>
        　　<p class='paragraph'>23、温柔而坚强：夏洛蒂·勃朗特《简·爱》</p>
        　　<p class='paragraph'>24、粉色的小爱情：堀川波《我就喜欢你这样的地方》</p>
        　　<p class='paragraph'>25、有天堂，但是没有道路：北村《玛卓的爱情》</p>
        　　<p class='paragraph'>26、美与爱是独立的：川端康成《雪国》</p>
        　　<p class='paragraph'>27、难得糊涂的爱情与婚姻：列夫·托尔斯泰《安娜·卡列尼娜》</p>
        　　<p class='paragraph'>28、战火中成长的美丽与坚强：玛格丽特·米切尔《飘》</p>
        　　<p class='paragraph'>29、用哲学来思考：米兰·昆德拉《生命中不能承受之轻》</p>
        　　<p class='paragraph'>30、奥德修斯式的传奇：雨果《悲惨世界》</p>
        　　<p class='paragraph'>31、二十四小时，路过爱，走过禁区：霍桑《红字》</p>
        　　<p class='paragraph'>32、最残酷的爱和最不忍的恨：曹禺《雷雨》</p>
        　　<p class='paragraph'>33、值得付出一生的等待：帕斯捷尔纳克《日瓦戈医生》</p>
        　　<p class='paragraph'>34、唤醒生命的人：海伦·凯勒《假如给我三天光明》</p>
        　　<p class='paragraph'>35、只有渺小的人物，没有渺小的爱情：西奥多·德莱塞《珍妮姑娘》</p>
        `,
    },
    {
        articleId: 2,
        articleTitle: "咖啡般的人生",
        src: "http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg",
        isTop: true,
        subTitle: "咖啡亦如人生，永远都是有苦有甜的，透着看不见的醇香、浓郁，在岁月中褪去张扬与浮华，只剩下温和的心与宽广的胸怀容纳它。",
        details: `
        <p class='paragraph'>初秋的夜里，独自来到街角的咖啡屋，选择一个静谧的角落坐下，叫上一杯蓝山咖啡，慢慢品尝。无限想象的空间和一些寂寞，伴随着灯光，锁住了我游离的灵魂。</p>
        <p class='paragraph'>微微透着寒意的深夜，昏黄的光晕下，缭绕的香气弥漫着我的影子。轻轻地搅动着手里的咖啡勺，静静地观察咖啡的波纹丝丝旋转，越搅越醇，越品越浓。苦涩中透着丝滑的香气，像是一位轻盈的女子在翩翩起舞。</p>
        <p class='paragraph'>回忆是美好的，放任自己去找寻记忆的影子，就在这多情的夜里。我仿佛看见了自己一半明媚一半忧伤的踌躇。轻柔的音乐缓缓流淌，窗外皎洁明亮的月色，照亮了我纯净的心房。不加糖的咖啡里盛满了我不太完满的人生，我苦苦追寻的圆满在悲欢离合中一次次地破碎和迷失。想保存一份最初的纯真，却还是心碎地离开。</p>
        <p class='paragraph'>再往杯里投下一块方糖，幻想着醇香而苦涩的咖啡里,能从此多一份香甜，温暖里少一些无法摆脱的苦涩。我再次轻轻地搅动着手里的长勺，有些焦急，也有些期待，期待着融化的方糖能在我失意的人生中投石点点，带来些许转变。</p>
        <p class='paragraph'>只是瞬间，回过神来，轻轻舔着唇上残留的香味，甘甜早已消失不见，弥留的只有尝不尽的酸涩。咖啡很香，却也很苦，咖啡一般的人生里有伤痛沉淀下来的痕迹。总想褪去骨子里的苦涩，人为地改变生活本色，却怎样也褪不去最初的味道。</p>
        <p class='paragraph'>沉淀，再沉淀，放弃浮躁的心，渐渐沉静下来。没有期待的醇香与甜美，只有忠于本色的对待。再轻轻啜饮一口，细细想来，咖啡亦如人生，永远都是有苦有甜的，透着看不见的醇香、浓郁，在岁月中褪去张扬与浮华，只剩下温和的心与宽广的胸怀容纳它。或许若干年后，会慢慢发觉：咖啡般的人生也如此香醇、静好。</p>
        `,
    },
    {
        articleId: 3,
        articleTitle: "在文字里开出有趣的灵魂",
        src: "http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg",
        isTop: true,
        subTitle: "韶华虽易逝，心却还少年。人生易老难阻挡，且以文字约旧人。胸中若有诗书在，岁月从不败美人",
        details: `
        <p class='paragraph'>人生清时有味，欢时有惜，倦时有依，唯文字可承载。</p>
        <p class='paragraph'>一个人爱上金钱物质很容易，但是爱上文字，却需要一个美妙的缘分。苏州的冬天到处都是清冷的空气，只有文字的微火，能让身心的每一个细胞慢慢温热起来，思维活跃起来。</p>
        <p class='paragraph'>我们在日常的生活之外，除了那些必然的责任；除了那些生计的忙碌；除了那些不得已而为之的琐碎。很多时候，必须要有一些精神与灵魂的共舞，让文字与心灵碰撞并深切地融合。将眸中心中的景许给流年，在和风送暖时；在花开静好时，在记忆流经血脉时……若缕缕暗香浮动。</p>
        <p class='paragraph'>文字之于我，像一场无遮无拦的春风，它吹到哪里，哪里就会开出漫山遍野的灵感之花。我在那花间散步、吟诗、浮想。文字中蕴含着人生最美的风景，带给人一份特别的抚慰与乐趣。</p>
        <p class='paragraph'>遇见，或许是早早晚晚的事情；或许它来得突然；或许它来得缓慢。但我相信，这一定是一个美丽的过程。自从与文字邂逅，心灵便敞开了窗扉，变得毫不设防。如果不用文字打破自己禁锢的内核，就无法吐纳出那些隐藏于心底的秘密；就无法流泻出压抑的爱恨情愁；更无法自拔灵魂于泥泞，完成一次美丽的化茧成蝶。爱上文字是一场无悔的选择。在文字的馨香里有旖旎风光；有人生最深刻的相逢；有生命中的聚散离合……它如一把坚硬的刻刀，雕刻出暮色里心灵的轮廓，又像柔软的慰藉，安抚着那颗脆弱的心。任时光静若流水，却承载着行色匆匆。</p>
        <p class='paragraph'>爱文字的人，即便随意而着的衣饰，也挡不住灵魂深处折射出的华彩。人在灯下，素素的清清，低眉沉思，无限的温婉，无限的美好。虽身体在凡尘之夜，心灵却飞向了苍茫与辽远。世界上最美的文字与情感，往往都在不经意的触发里，它来的那么自然；那么真切；那么沸腾。写诗词歌赋，用诗歌的雪花涤净了精神的世界，心为平仄的韵律起伏着，跌宕着，奔流着。我喜欢这世间的碧水长流，更热爱它的生生不息。一如来而又去的生命；一如辽阔平静的岁月；一如那些确幸的遇见；且行且惜……</p>
        <p class='paragraph'>装满人生的故事，装满丰富的心情，这样的时光才足够迷人。文字让人活在情感丰满的世界。无论娓娓诉说，还是静静冥想，均把内心充实的柔软极致，深刻精准。撩起记忆的帷幔，无论是温暖还是薄凉；无论是心路历程还是悉心陪伴；无论是纤尘不染还是关怀的寄语，都在文字的厚重里珍藏着人生的一份弥久留香。</p>
        <p class='paragraph'>历经沧海桑田、过尽千帆，依然是初心。然，那份被岁月修炼的情怀，却平添了几许特别的沉静、宽容、质朴、精致，去掉了尘世间的粗糙和俗气。</p>
        <p class='paragraph'>用文字洗礼心灵的人，会在光阴中不断加持更多能量与磁场，添加着人格魅力的指数，绽放出人生最美的芳华。</p>
        <p class='paragraph'>韶华虽易逝，心却还少年。每当用文字划过那些心尖上唯美的颤栗，那些从未臣服于命运的努力；那些矜持内敛；那些情深矣矣，便成就了人生忘我的修行。人到中年，文字也到了中年。它脱离了少年的稚嫩，却保留着那份没被尘染的雪白。如那句唐诗的诠释：唯见江心秋月白！宛若秋天的果实，变得越来越饱满丰厚了。</p>
        <p class='paragraph'>用真诚的文字缅怀逝去和正在拥有的时光，用心讲述生命的点滴，给人生一份满意的答卷，或许这就是珍惜生命的一种最感性的方式吧；或许这也是消退内心那些五味杂陈最行之有效的方法。不想糊里糊涂地老去，尽管青春不在；尽管华发渐生；尽管岁月的沧桑悄然刻在脸上。在时光静好的路上，把粗粝变得细腻；把气质修炼优雅；把心情与阳光相融；把微笑溢在脸上，任由岁月的积淀，活出自己的一份云淡风轻。</p>
        <p class='paragraph'>与文字相伴的日子，绵密而妥帖，不被惊扰，恣意地享受着字中有诗，诗中有画的日子。在最适合自己的光阴里，不厌倦、不烦忧、不恼怒、不狂喜、不计较，只安然于那寂静的节奏。入我心者皆明月，入我诗者皆清风。生活与文字都是修行，用文字勾勒出宁静致远，让心更纯净更透明，爱我所爱。</p>
        <p class='paragraph'>一篇玲珑曼妙的文章，往往带给人一生无穷尽遐想，精神上也获得一笔不可估量的财富。真心善待文字的人，文字也让我们享受到一份不一样的人生境界。用平淡真挚的文字守候着内心这片深邃的海，人生易老难阻挡，且以文字约旧人。胸中若有诗书在，岁月从不败美人。今生遇见文字，便是时光与银发的相依。雅人深致，让别样的文字绽放出别样的烟火；让别样的文字见证别样的灵魂；让别样的文字与别样的光芒同频，在生命的肌理上，留下了一行特殊的印记，让岁月感知……</p>
        `,
    },
    ],
    photoOthers: [],
    video: [],
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