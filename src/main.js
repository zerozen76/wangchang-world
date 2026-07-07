import './styles.css';

const modules = [
  {
    id: 'map',
    title: '世界地图小探险',
    mark: '图',
    theme: '#2f7fbf',
    intro: '从地图看地形、河流、气候、城市和文化，理解人为什么在不同地方用不同方式生活。',
    items: [
      {
        title: '中国',
        tag: '亚洲 Asia',
        facts: ['首都北京，长江和黄河孕育了很多城市', '地形从西部高原到东部平原，影响河流方向', '南北气候不同，所以饮食、房屋和农作物也不同', '长城不是一条简单的墙，而是一套古代防御系统'],
        deep: '看中国地图时，王畅可以注意“地形影响生活”。西部高、东部低，很多大河向东流入大海；河流附近适合种植、运输和建城。一个国家的历史，经常和山脉、河流、海岸线有关。',
        connection: '王畅可以找一找自己所在城市离北京、长江或黄河有多远，再想想：家里的主食、天气和房子，是否和当地地理有关。',
        words: [['map', '地图'], ['river', '河流'], ['capital', '首都']],
        question: '中国许多大河为什么大体向东流？',
        answers: ['西部地势更高', '东边更冷', '海水会推河水'],
        correct: '西部地势更高'
      },
      {
        title: '埃及',
        tag: '非洲 Africa',
        facts: ['尼罗河穿过干旱地区，是古埃及农业的生命线', '金字塔体现了古代工程、组织和天文观察', '沙漠让城市更集中在河谷附近', '古埃及文字和建筑帮助后人研究历史'],
        deep: '埃及提醒王畅：文明不只是“很久以前的人”，还包括水源、粮食、劳动分工、数学和记录方法。没有稳定的粮食，人们很难长期建造大型城市和工程。',
        connection: '王畅可以把尼罗河想成城市的“充电线”：水流到哪里，生命和城市就更容易在哪里出现。',
        words: [['desert', '沙漠'], ['pyramid', '金字塔'], ['civilization', '文明']],
        question: '为什么尼罗河对古埃及特别重要？',
        answers: ['它带来水和农业条件', '它能发光', '它能挡住所有风'],
        correct: '它带来水和农业条件'
      },
      {
        title: '巴西',
        tag: '南美洲 South America',
        facts: ['亚马孙雨林有极高的生物多样性', '雨林通过蒸腾作用影响水汽和降雨', '巴西的官方语言是葡萄牙语', '雨林保护和农业、城市发展之间需要平衡'],
        deep: '亚马孙雨林像一座巨大的生命图书馆，里面有无数植物、昆虫、鸟类和微生物。保护它不是只为了“好看”，也关系到气候、水循环和未来可能的药物研究。',
        connection: '王畅可以观察一片小区绿地：树多的地方是不是更凉快？这就是小尺度的生态调节。',
        words: [['rainforest', '雨林'], ['species', '物种'], ['climate', '气候']],
        question: '亚马孙雨林为什么被认为很重要？',
        answers: ['有丰富生命并影响气候', '里面全是冰', '没有任何动物'],
        correct: '有丰富生命并影响气候'
      }
    ]
  },
  {
    id: 'weather',
    title: '天气和自然',
    mark: '天',
    theme: '#3b8c6e',
    intro: '理解太阳、水、空气和地球运动怎样共同制造天气、季节和自然现象。',
    items: [
      {
        title: '水循环',
        tag: '自然规律 Nature',
        facts: ['太阳加热水面，水变成水蒸气', '水蒸气升高遇冷凝结成云', '云中水滴或冰晶变重后形成降水', '雨水进入河流、地下水和海洋，循环继续'],
        deep: '水循环的关键是能量。太阳提供能量，重力让雨水落下，地形决定水往哪里流。天气预报里的“湿度”和“降水概率”，都和空气里能装多少水汽有关。',
        connection: '王畅洗完手，手上的水会慢慢变干，这就是蒸发。下次可以观察：开风扇时干得更快吗？为什么？',
        words: [['evaporation', '蒸发'], ['cloud', '云'], ['rain', '雨']],
        question: '水蒸气遇冷后更容易变成什么？',
        answers: ['小水滴或云', '铁块', '火苗'],
        correct: '小水滴或云'
      },
      {
        title: '四季',
        tag: '地球运动 Earth',
        facts: ['地球绕太阳公转约一年', '地轴倾斜让不同地区接收阳光角度不同', '夏季通常白天更长、阳光更直', '南北半球季节常常相反'],
        deep: '季节不是因为地球离太阳远近变化造成的主要结果，而是因为阳光照射角度和白天长度变化。阳光越直，同样面积得到的能量越多，就更容易变热。',
        connection: '王畅可以记录一周内每天太阳落山时间，会发现季节变化不是突然发生，而是慢慢移动。',
        words: [['season', '季节'], ['sunlight', '阳光'], ['tilt', '倾斜']],
        question: '四季变化主要和什么有关？',
        answers: ['地轴倾斜和阳光角度', '月亮颜色', '海水味道'],
        correct: '地轴倾斜和阳光角度'
      },
      {
        title: '风',
        tag: '空气流动 Air',
        facts: ['风是空气从高压区向低压区流动', '冷热不均会造成气压差', '海边白天和夜晚风向可能不同', '风能传播花粉，也能推动风力发电机'],
        deep: '空气虽然看不见，但有质量，也会被加热、冷却和推动。风不是随机乱吹，它背后有温度、气压和地形的原因。',
        connection: '王畅可以用纸条靠近窗边或风扇，观察风向。科学常常从一个很简单的观察开始。',
        words: [['wind', '风'], ['air', '空气'], ['pressure', '气压']],
        question: '风形成的重要原因之一是什么？',
        answers: ['气压差', '纸张颜色', '铅笔长短'],
        correct: '气压差'
      }
    ]
  },
  {
    id: 'animals',
    title: '动物世界',
    mark: '动',
    theme: '#ba6b33',
    intro: '从分类、适应、食物链和生态关系理解动物，而不只是记名字。',
    items: [
      {
        title: '熊猫',
        tag: '哺乳动物 Mammal',
        facts: ['熊猫属于哺乳动物，幼崽需要吃奶', '它主要吃竹子，但分类上属于食肉目', '伪拇指帮助它抓握竹子', '栖息地破碎会影响野外种群'],
        deep: '熊猫说明“分类”和“习惯”不完全一样。它的祖先和身体结构保留了食肉目特征，但长期适应了以竹子为主的食物。生物会在环境中慢慢形成适应。',
        connection: '王畅可以想一想：筷子、勺子、手指都能帮助人吃饭；熊猫的伪拇指就是它吃竹子的工具。',
        words: [['mammal', '哺乳动物'], ['bamboo', '竹子'], ['habitat', '栖息地']],
        question: '熊猫的伪拇指主要帮助它做什么？',
        answers: ['抓握竹子', '写字', '游泳'],
        correct: '抓握竹子'
      },
      {
        title: '企鹅',
        tag: '鸟类 Bird',
        facts: ['企鹅有羽毛、会下蛋，所以是鸟类', '翅膀演化成适合游泳的鳍状结构', '厚脂肪和密羽毛帮助保温', '群体生活能提高幼鸟存活率'],
        deep: '企鹅不会飞，但它在水里“飞”得很快。演化不是追求所有能力都强，而是在特定环境里把关键能力变得更合适。',
        connection: '王畅游泳时会发现手掌划水比一根手指更有力，企鹅的翅膀也是为了更有效地推水。',
        words: [['bird', '鸟'], ['feather', '羽毛'], ['swim', '游泳']],
        question: '企鹅为什么仍然属于鸟类？',
        answers: ['有羽毛并会下蛋', '住在冰上', '走路摇晃'],
        correct: '有羽毛并会下蛋'
      },
      {
        title: '蜜蜂',
        tag: '昆虫 Insect',
        facts: ['昆虫通常有头、胸、腹三部分和六条腿', '蜜蜂采蜜时会帮助花朵传粉', '蜂群有分工：蜂王、工蜂、雄蜂', '许多水果产量和传粉昆虫有关'],
        deep: '蜜蜂让王畅看到“合作系统”。一只蜜蜂很小，但很多蜜蜂分工合作，就能维持蜂巢，还能影响果园和农田。',
        connection: '王畅吃苹果、草莓时，可以想到背后可能有传粉昆虫的功劳。餐桌上的食物和自然不是分开的。',
        words: [['insect', '昆虫'], ['pollination', '传粉'], ['hive', '蜂巢']],
        question: '蜜蜂帮助植物传粉后，植物更容易形成什么？',
        answers: ['果实和种子', '玻璃', '电池'],
        correct: '果实和种子'
      }
    ]
  },
  {
    id: 'body',
    title: '身体和健康',
    mark: '身',
    theme: '#d45662',
    intro: '认识身体系统怎样合作，并把知识变成睡眠、运动、饮食和卫生习惯。',
    items: [
      {
        title: '心脏',
        tag: '循环系统 Body',
        facts: ['心脏像泵，把血液送到全身', '血液运输氧气、营养和废物', '运动时肌肉需要更多氧气，心跳会变快', '长期运动能提高心肺功能'],
        deep: '心脏不是单独工作，它和肺、血管、肌肉一起组成运输系统。肺把氧气带进血液，心脏负责推动血液，肌肉使用氧气产生能量。',
        connection: '王畅跑步后可以摸摸脉搏，比较安静时和运动后的次数，这就是把身体变成一个小实验室。',
        words: [['heart', '心脏'], ['blood', '血液'], ['oxygen', '氧气']],
        question: '运动后心跳变快，是因为身体更需要什么？',
        answers: ['氧气和能量', '糖纸', '墨水'],
        correct: '氧气和能量'
      },
      {
        title: '牙齿',
        tag: '健康习惯 Health',
        facts: ['牙齿负责切断和磨碎食物', '牙菌斑里的细菌会利用糖产生酸', '酸会伤害牙釉质，形成龋齿', '刷牙、牙线和少喝含糖饮料能保护牙齿'],
        deep: '保护牙齿不是只为了好看。咀嚼是消化第一步，牙齿不好会影响吃饭、发音和营养吸收。糖吃得越频繁，细菌产酸机会越多。',
        connection: '王畅可以把刷牙看成给牙齿“清理战场”：早晚各一次，尤其睡前不要让糖和细菌在嘴里过夜。',
        words: [['tooth', '牙齿'], ['sugar', '糖'], ['bacteria', '细菌']],
        question: '牙菌斑里的细菌利用糖后会产生什么伤害牙齿？',
        answers: ['酸', '阳光', '沙子'],
        correct: '酸'
      },
      {
        title: '大脑',
        tag: '神经系统 Brain',
        facts: ['大脑处理感觉、记忆、情绪和动作控制', '学习会让神经连接更常被使用', '睡眠帮助整理记忆', '运动和阅读都能促进大脑发展'],
        deep: '大脑不是像硬盘一样简单存东西。学习时，神经元之间的连接会变得更有效。反复练习不是笨办法，而是在给大脑修路。',
        connection: '王畅学英文单词时，可以用“看、读、写、造句”多种方式重复，大脑会更容易记住。',
        words: [['brain', '大脑'], ['memory', '记忆'], ['practice', '练习']],
        question: '为什么反复练习能帮助学习？',
        answers: ['神经连接会更有效', '纸会变重', '铅笔会发光'],
        correct: '神经连接会更有效'
      }
    ]
  },
  {
    id: 'transport',
    title: '交通工具',
    mark: '交',
    theme: '#586fbd',
    intro: '用力、能量、路线和安全规则理解交通工具，而不是只看速度。',
    items: [
      {
        title: '火车',
        tag: '陆地交通 Train',
        facts: ['钢轮和钢轨之间摩擦小，适合长距离运输', '高铁需要平直轨道、信号系统和调度', '城市地铁提高通勤效率', '站台安全线能减少跌落和碰撞风险'],
        deep: '火车系统不只是车厢和轨道，还包括供电、信号、车站、时刻表和维修。一个交通系统越复杂，越需要规则和协作。',
        connection: '王畅坐地铁或高铁时，可以观察站台屏幕、线路图和安全门，它们都是工程设计的一部分。',
        words: [['train', '火车'], ['rail', '轨道'], ['station', '车站']],
        question: '高铁安全运行除了列车本身，还特别依赖什么？',
        answers: ['轨道和信号系统', '糖果盒', '月亮形状'],
        correct: '轨道和信号系统'
      },
      {
        title: '飞机',
        tag: '空中交通 Plane',
        facts: ['机翼让空气流动产生升力', '发动机提供向前的推力', '飞行需要导航、通信和天气判断', '机场安检和跑道规则保障安全'],
        deep: '飞机能飞，是升力、推力、重力和阻力共同作用的结果。飞行员不是只会“开飞机”，还要理解仪表、天气、路线和紧急情况。',
        connection: '王畅可以把纸飞机折成不同形状，看哪种飞得更远，这就是在观察机翼形状和空气阻力。',
        words: [['plane', '飞机'], ['wing', '机翼'], ['lift', '升力']],
        question: '飞机机翼主要帮助产生什么？',
        answers: ['升力', '海浪', '铁轨'],
        correct: '升力'
      },
      {
        title: '轮船',
        tag: '水上交通 Ship',
        facts: ['轮船靠浮力漂在水面', '大型货轮连接全球贸易', '港口需要装卸设备和航道管理', '救生衣和避碰规则是水上安全重点'],
        deep: '大船很重却能浮，是因为它排开了大量水，水给它向上的浮力。交通工具背后常常有物理原理。',
        connection: '王畅可以把空塑料瓶压进水里，感受水向上推的力，这就是浮力的体验。',
        words: [['ship', '轮船'], ['port', '港口'], ['buoyancy', '浮力']],
        question: '轮船能浮在水面，关键和什么有关？',
        answers: ['浮力', '铅笔盒', '太阳颜色'],
        correct: '浮力'
      }
    ]
  },
  {
    id: 'space',
    title: '宇宙小课堂',
    mark: '宇',
    theme: '#7458a8',
    intro: '用运动、引力、光和尺度理解宇宙，建立真正的空间想象力。',
    items: [
      {
        title: '地球',
        tag: '行星 Planet',
        facts: ['地球自转带来昼夜变化', '地球公转和地轴倾斜造成四季', '大气层保护生命并调节温度', '液态水是地球生命的重要条件'],
        deep: '地球不是静止的。它一边自转，一边绕太阳公转，还被月球引力影响潮汐。我们站着觉得稳定，是因为尺度太大、运动太平稳。',
        connection: '王畅看到日出日落时，可以提醒自己：不是太阳真的绕着我们跑，而是地球在转。',
        words: [['Earth', '地球'], ['planet', '行星'], ['rotation', '自转']],
        question: '昼夜交替主要由什么造成？',
        answers: ['地球自转', '海水变色', '云朵排队'],
        correct: '地球自转'
      },
      {
        title: '月亮',
        tag: '卫星 Moon',
        facts: ['月亮是地球的天然卫星', '月亮反射太阳光，本身不发光', '月相变化来自受光部分的角度变化', '月球引力会影响海洋潮汐'],
        deep: '月亮每天形状不同，不是被谁咬掉了，而是太阳、地球、月亮的位置变化。科学常常把神秘现象变成可以解释的规律。',
        connection: '王畅可以连续一个月画月亮形状，做一本自己的“月相日记”。',
        words: [['Moon', '月亮'], ['phase', '月相'], ['tide', '潮汐']],
        question: '月亮看起来有圆有缺，主要因为什么？',
        answers: ['看到的受光部分不同', '月亮真的少了一块', '月亮在眨眼'],
        correct: '看到的受光部分不同'
      },
      {
        title: '火箭',
        tag: '航天工具 Rocket',
        facts: ['火箭向下喷出高速气体，获得向上的推力', '进入轨道需要足够高的速度', '多级火箭会丢掉用完的部分减轻重量', '卫星能用于导航、通信和天气观测'],
        deep: '火箭不是只要“飞得高”就能进太空。进入轨道需要横向速度，让它不断向地球下落却总是错过地面，这就是绕地飞行。',
        connection: '王畅吹气球再放手，气球乱飞就是反作用力的简单例子。火箭更精确、更强大。',
        words: [['rocket', '火箭'], ['orbit', '轨道'], ['satellite', '卫星']],
        question: '火箭向下喷气后为什么能向上运动？',
        answers: ['反作用力推动它', '云朵拉它', '颜色变轻'],
        correct: '反作用力推动它'
      }
    ]
  },
  {
    id: 'jobs',
    title: '职业认知',
    mark: '职',
    theme: '#278078',
    intro: '理解职业背后的知识、工具、责任和协作，看到社会怎样运转。',
    items: [
      {
        title: '医生',
        tag: '健康职业 Doctor',
        facts: ['医生要收集症状、检查体征并判断原因', '治疗可能包括休息、药物、手术或生活方式改变', '医学需要证据，不能只靠猜', '公共卫生能预防很多疾病'],
        deep: '医生的工作像侦探：先收集线索，再提出可能原因，最后用检查和经验排除错误答案。好的医生还要会沟通，让病人理解怎么配合治疗。',
        connection: '王畅感冒时可以练习准确描述：什么时候开始、哪里不舒服、有没有发烧。这是帮助医生判断的重要信息。',
        words: [['doctor', '医生'], ['symptom', '症状'], ['health', '健康']],
        question: '医生判断病因时，首先需要收集什么？',
        answers: ['症状和检查信息', '玩具数量', '天气颜色'],
        correct: '症状和检查信息'
      },
      {
        title: '消防员',
        tag: '安全救援 Firefighter',
        facts: ['消防员负责灭火、救援和安全宣传', '火灾中烟雾往往比火焰更危险', '防护服、呼吸器和水带是重要工具', '团队协作和指挥系统能减少风险'],
        deep: '消防员不是只靠勇敢。真正的救援需要训练、装备、路线判断和团队纪律。危险职业更需要冷静和规则。',
        connection: '王畅可以和家人一起画家庭逃生路线，记住火灾时不要坐电梯，要低姿前进、尽快离开。',
        words: [['fire', '火'], ['rescue', '救援'], ['safety', '安全']],
        question: '火灾逃生时为什么要尽量低姿前进？',
        answers: ['烟雾常在上方更浓', '地面会发光', '这样更好玩'],
        correct: '烟雾常在上方更浓'
      },
      {
        title: '工程师',
        tag: '创造职业 Engineer',
        facts: ['工程师把问题变成可测试的方案', '设计需要考虑成本、安全、材料和用户', '原型测试能发现缺陷', '失败记录是改进的重要资料'],
        deep: '工程思维不是一次做对，而是“设计、测试、发现问题、再改进”。桥梁、软件、玩具、飞机都需要这种循环。',
        connection: '王畅搭积木倒了，不是失败，而是一次测试结果。可以问：底座够宽吗？重心太高吗？连接牢吗？',
        words: [['engineer', '工程师'], ['design', '设计'], ['test', '测试']],
        question: '工程师发现原型有问题后，最应该做什么？',
        answers: ['记录并改进', '假装没看到', '永远不再尝试'],
        correct: '记录并改进'
      }
    ]
  },
  {
    id: 'people',
    title: '名人传记',
    mark: '人',
    theme: '#9b6a2f',
    intro: '从人物故事里学习方法：观察、坚持、提问、实验和承担责任。',
    items: [
      {
        title: '屠呦呦',
        tag: '科学家 Scientist',
        facts: ['她带领团队研究青蒿素', '青蒿素帮助治疗疟疾', '研究结合古代文献和现代实验', '科学成果能影响全世界许多人的生命'],
        deep: '屠呦呦的故事说明，科学不是凭空想象。研究者要查资料、做实验、失败后调整方法，还要让结果经得起检验。',
        connection: '王畅做题或做实验时，如果第一次不对，可以像科学家一样记录原因，而不是只说“我不会”。',
        words: [['scientist', '科学家'], ['experiment', '实验'], ['medicine', '药物']],
        question: '屠呦呦团队研究的青蒿素主要帮助治疗什么？',
        answers: ['疟疾', '近视', '骨折'],
        correct: '疟疾'
      },
      {
        title: '袁隆平',
        tag: '农业科学家 Agriculture',
        facts: ['他长期研究杂交水稻', '目标是提高粮食产量', '农业科学需要田间观察和大量实验', '粮食安全关系到国家和家庭生活'],
        deep: '袁隆平让王畅看到：科学不只在实验室，也在田野里。提高一粒米的产量，背后是遗传、气候、土壤和种植技术的综合研究。',
        connection: '王畅吃米饭时，可以想想一碗饭背后有种子、阳光、水、农民、运输和科学。',
        words: [['rice', '水稻/米饭'], ['farm', '农田'], ['food', '食物']],
        question: '袁隆平的主要贡献和什么有关？',
        answers: ['杂交水稻', '绘画颜料', '火山喷发'],
        correct: '杂交水稻'
      },
      {
        title: '达·芬奇',
        tag: '艺术与科学 Art',
        facts: ['他画过《蒙娜丽莎》', '他研究人体、机械、水流和飞行', '他的笔记里有大量草图和观察', '他把艺术、工程和科学联系在一起'],
        deep: '达·芬奇的厉害不只是会画画，而是会观察。他把眼睛看到的细节画下来，再继续问“为什么”。跨学科学习能让想法更丰富。',
        connection: '王畅画画时也可以学达·芬奇：画一辆车，不只画外形，还可以想轮子为什么能转、刹车怎样停。',
        words: [['art', '艺术'], ['observe', '观察'], ['machine', '机器']],
        question: '达·芬奇给我们的一个重要启发是什么？',
        answers: ['艺术和科学可以连接', '学习只能学一门', '观察没有用'],
        correct: '艺术和科学可以连接'
      }
    ]
  }
];

const app = document.querySelector('#app');
let currentModuleId = modules[0].id;
let currentItemIndex = 0;
let score = 0;
let feedback = '选择一个栏目，再点知识卡。王畅可以一边读中文，一边记 3 个英文单词。';

function getModule() {
  return modules.find((module) => module.id === currentModuleId);
}

function getItem() {
  return getModule().items[currentItemIndex];
}

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function chooseModule(id) {
  currentModuleId = id;
  currentItemIndex = 0;
  const module = getModule();
  feedback = `进入${module.title}。先读核心知识，再看“和王畅有什么关系”。`;
  speak(`${module.title}。${module.intro}`);
  render();
}

function chooseItem(index) {
  currentItemIndex = index;
  const item = getItem();
  feedback = `${item.title}：${item.connection}`;
  speak(`${item.title}。${item.deep}。${item.connection}`);
  render();
}

function answer(choice) {
  const item = getItem();
  if (choice === item.correct) {
    score += 1;
    feedback = `答对了！${item.correct}。再试着把英文单词读一遍。`;
    speak(feedback);
  } else {
    feedback = `再想一想。提示：${item.facts[0]}。`;
    speak(feedback);
  }
  render();
}

function renderMapScene() {
  const pins = [
    ['中', 70, 46, '#e95649'],
    ['埃', 53, 54, '#d59f38'],
    ['巴', 34, 69, '#2f9e62'],
    ['法', 46, 39, '#5979d8'],
    ['美', 22, 43, '#4d8fcd'],
    ['澳', 78, 74, '#cf7b42']
  ];

  return `
    <div class="map-scene" aria-label="儿童版世界地图">
      <div class="continent north-america"></div>
      <div class="continent south-america"></div>
      <div class="continent europe"></div>
      <div class="continent africa"></div>
      <div class="continent asia"></div>
      <div class="continent australia"></div>
      ${pins.map(([text, x, y, color]) => `
        <span class="pin" style="left:${x}%; top:${y}%; --pin:${color}">${text}</span>
      `).join('')}
    </div>
  `;
}

function renderLearningScene(module) {
  if (module.id === 'map') return renderMapScene();

  const item = getItem();
  return `
    <div class="learning-scene" style="--scene:${module.theme}">
      <div class="big-mark">${module.mark}</div>
      <div>
        <p>${module.title}</p>
        <strong>${item.title}</strong>
        <span>${item.tag}</span>
      </div>
    </div>
  `;
}

function render() {
  const module = getModule();
  const item = getItem();

  app.innerHTML = `
    <section class="shell">
      <header class="topbar">
        <div>
          <p class="kicker">王畅的探索课</p>
          <h1>王畅的世界</h1>
        </div>
        <div class="score" aria-label="答题星星">
          <span>星</span>
          <strong>${score}</strong>
        </div>
      </header>

      <nav class="module-grid" aria-label="学习栏目">
        ${modules.map((entry) => `
          <button
            type="button"
            class="module-button ${entry.id === currentModuleId ? 'active' : ''}"
            style="--module:${entry.theme}"
            data-module="${entry.id}">
            <span>${entry.mark}</span>
            <strong>${entry.title}</strong>
          </button>
        `).join('')}
      </nav>

      <section class="stage">
        <div class="scene-wrap">
          ${renderLearningScene(module)}
        </div>

        <aside class="panel" style="--accent:${module.theme}">
          <p class="kicker">${module.title}</p>
          <h2>${item.title}</h2>
          <p class="intro">${module.intro}</p>
          <div class="fact-list">
            ${item.facts.map((fact) => `<div>${fact}</div>`).join('')}
          </div>
          <section class="explain-block">
            <h3>深入一点</h3>
            <p>${item.deep}</p>
          </section>
          <section class="connect-block">
            <h3>和王畅有关</h3>
            <p>${item.connection}</p>
          </section>
          <section class="word-block" aria-label="英文单词">
            ${item.words.map(([word, meaning]) => `
              <div><strong>${word}</strong><span>${meaning}</span></div>
            `).join('')}
          </section>
          <button class="sound" id="soundButton" type="button">听一听</button>
        </aside>
      </section>

      <section class="cards" aria-label="知识卡">
        ${module.items.map((entry, index) => `
          <button
            type="button"
            class="knowledge-card ${index === currentItemIndex ? 'active' : ''}"
            data-item="${index}">
            <span>${entry.tag}</span>
            <strong>${entry.title}</strong>
            <small>${entry.facts[0]}</small>
          </button>
        `).join('')}
      </section>

      <section class="quiz">
        <div>
          <p class="kicker">思考题</p>
          <h3>${item.question}</h3>
        </div>
        <div class="answers">
          ${item.answers.map((choice) => `
            <button type="button" data-answer="${choice}">${choice}</button>
          `).join('')}
        </div>
      </section>

      <footer class="message" aria-live="polite">${feedback}</footer>
    </section>
  `;

  document.querySelectorAll('[data-module]').forEach((button) => {
    button.addEventListener('click', () => chooseModule(button.dataset.module));
  });

  document.querySelectorAll('[data-item]').forEach((button) => {
    button.addEventListener('click', () => chooseItem(Number(button.dataset.item)));
  });

  document.querySelectorAll('[data-answer]').forEach((button) => {
    button.addEventListener('click', () => answer(button.dataset.answer));
  });

  document.querySelector('#soundButton').addEventListener('click', () => {
    speak(`${module.title}。${item.title}。${item.deep}。${item.connection}`);
  });
}

render();
