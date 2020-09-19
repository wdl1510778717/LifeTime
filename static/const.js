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
        navItem: [
            { name: "首页", url: "/home", min_modulePermission: true, max_modulePermission: true },
            { name: "文章", url: "/article", min_modulePermission: false, max_modulePermission: true },
            { name: "相册", url: "/photo", min_modulePermission: false, max_modulePermission: false },
            { name: "留言", url: "/message", min_modulePermission: false, max_modulePermission: true },
            { name: "关于", url: "/about", min_modulePermission: false, max_modulePermission: true }
        ],
        aboutMeModule: {
            moduleTitle: "关于",
            modulePermission: true,
            nckName: "爱裸睡的猪🐖",
            userAvatar: userAvatar,
            details: "，一个90后草根程序猿！17年入行。本科毕业，陆陆续续干过政府科员，软件公司职员。致力于web前端技术研究和软件开发，性格开朗，平易近人，爱好运动和网络竞技游戏。创建本博客是为了，分享和记述生活趣事。当然本博客不公开，纯属娱乐，盗版必究0.0",
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
                            imageSrc: "../..../../static/images/aboretum/",
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
                        }, ],
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
                            imageSrc: "../../static/images/antiquity/",
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
                        }, ],
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
                            imageSrc: "../../static/images/love/",
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
                        }, ],
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
                            imageSrc: "../../static/images/scenery/",
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
                        }, ],
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
                src: "../../static/images/home/follow_me.jpg",
            }],
        },
        articleData: [{
                articleId: 1,
                articleTitle: "个人博客，我为什么要用帝国cms？",
                src: "http://www.yangqq.com/d/file/blogs/2018-06-18/0daedba8782d1b87dd38d9914d9cee3f.png",
                isTop: true,
                subTitle: "我所知道的比较流行的博客系统有，wordpress，Z-Blog，emlog等，最流行的是worpress，主题多，插件多，所以选择wp的个人站长也很多。以上三个博客系统我都用过，用的时间最",
                details: "这是我的文章",
            },
            {
                articleId: 2,
                articleTitle: "个人博客，属于我的小世界！",
                src: "http://www.yangqq.com/d/file/news/life/2018-04-27/762f99f369ae786f970477feeb3b9d77.jpg",
                isTop: true,
                subTitle: "本文很长，记录了我博客建站初到现在的过程，还有我从毕业到现在的一个状态，感谢您的阅读，如果你还是学生，也许你能从此文中，找到我们曾经相似的地方。如果你已经工作，",
                details: "",
            },
            {
                articleId: 3,
                articleTitle: "一个三十而立的男程序员真实讲述：代码搅乱我的生活",
                src: "http://www.yangqq.com/d/file/news/life/2014-05-29/37b2762ee25cd73e39019c57eb6c6135.jpg",
                isTop: false,
                subTitle: "讲述者：李仲 31岁 程序员记录者：杨丁 记者 荆楚网四年如一日 生活沉闷我做了四年程序员。这是非常沉闷的一个工作，如果对这行有爱好，还觉得比较有乐趣。如果光是为糊口，",
                details: "",
            },
            {
                articleId: 4,
                articleTitle: "抄袭门过后——丢掉心结，重拾自己",
                src: "http://www.yangqq.com/d/file/news/life/2014-05-29/37b2762ee25cd73e39019c57eb6c6135.jpg",
                isTop: false,
                subTitle: "说到抄袭，初中就发生了那么一件尴尬的事。我的作文在班上老师和同学一直都认为还不错，经常被拿到班上甚至其他班当范文。以《 微笑》为标题作文，两天时间我就是想不出微笑",
                details: "",
            },
            {
                articleId: 5,
                articleTitle: "个人博客从简不繁",
                src: "https://www.yangqq.com/d/file/news/life/2018-11-11/706322d7b93c7a5fbb8ec43001aa32d7.jpg",
                isTop: false,
                subTitle: "十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排",
                details: "",
            },
            {
                articleId: 6,
                articleTitle: "犯错了怎么办？",
                src: "http://www.yangqq.com/d/file/news/s/2014-04-09/0b5fad3a513ad04e92764533b772070c.jpg",
                isTop: false,
                subTitle: "引子：看到昔日好友发了一篇日志《咎由自取》他说他是一个悲观者，感觉社会抛弃了他，脾气、性格在6年的时间里变化很大，很难适应这个社会。人生其实就是不断犯错的过程，在",
                details: "",
            },
            {
                articleId: 7,
                articleTitle: "作为一个设计师,如果遭到质疑你是否能恪守自己的原则?",
                src: "http://www.yangqq.com/d/file/news/life/2018-03-13/49962501843114c70121ad142e60a056.jpg",
                isTop: false,
                subTitle: "曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的",
                details: "",
            },
            {
                articleId: 8,
                articleTitle: "《野蚂蚁》卜野 原创个人博客-撰写互联网人的工作与生活",
                src: "http://www.yangqq.com/d/file/blogs/2018-07-10/094f20095d26875c98d3370f5c04e67e.png",
                isTop: false,
                subTitle: "前往 卜野个人博客，站长名字叫，卜野，这两个字很有意思，刚开始我以为是他的网名，哪知，看了他博客的“关于我”，才知“卜野”是真名。他的个人",
                details: "",
            },
            {
                articleId: 9,
                articleTitle: "安静地做一个爱设计的女子",
                src: "http://www.yangqq.com/d/file/news/life/2018-06-17/917d732926d79cc2ae1012831ce51d1e.jpg",
                isTop: false,
                subTitle: "自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢",
                details: "",
            },
            {
                articleId: 10,
                articleTitle: "【匆匆那些年】总结个人博客经历的这四年",
                src: "http://www.yangqq.com/d/file/jstt/bj/2018-06-29/3f0b6da48a6fd4e626a021ff7bd0d74f.jpg",
                isTop: false,
                subTitle: "博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过&amp;hellip;但最后还是坚持了下来，时间如此匆匆，等再回过头",
                details: "",
            },
            {
                articleId: 11,
                articleTitle: "《寻之旅》一个关于旅游，游记的个人博客",
                src: "http://www.yangqq.com/d/file/blogs/2018-05-27/a3f627dc6e35a53687da5e989491f16f.jpg",
                isTop: false,
                subTitle: "《寻之旅》www.searchtrip.cn 这是一个记录游记，旅游分享的个人博客，我们相识于3月份，一句“你可以先不要删我嘛”，还有海绵宝宝的头像，让我对他印象深刻。",
                details: "",
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