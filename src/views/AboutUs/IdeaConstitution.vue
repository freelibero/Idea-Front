<template>
  <div class="bg-surface text-on-surface font-body-md overflow-x-hidden">
    <NavBar />

    <main class="relative pt-32 pb-section-gap">
      <div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter relative">
        <!-- Side Navigation / Table of Contents -->
        <aside class="col-span-3 sticky top-32 h-[calc(100vh-160px)] hidden lg:block">
          <div class="flex flex-col h-full border-l border-midnight-gray pl-6">
            <h3 class="font-label-xs text-xs uppercase tracking-[0.2em] text-secondary mb-8">目录导航</h3>
            <nav class="flex flex-col space-y-6 overflow-y-auto pr-2">
              <a
                v-for="item in tocItems"
                :key="item.id"
                :href="'#' + item.id"
                class="toc-link group flex items-center transition-all duration-300"
                :class="activeSection === item.id ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'"
                @click.prevent="scrollToSection(item.id)"
              >
                <span
                  class="w-2 h-2 rounded-full bg-secondary mr-3 shrink-0 transition-all"
                  :class="activeSection === item.id ? 'opacity-100 scale-125' : 'opacity-0 group-hover:opacity-100'"
                ></span>
                <span class="font-body-md text-sm leading-snug">{{ item.label }}</span>
              </a>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="col-span-12 lg:col-span-9 max-w-3xl">
          <header class="mb-20">
            <span class="font-label-xs text-xs uppercase tracking-widest text-secondary block mb-4">官方文件</span>
            <h1 class="font-headline-lg text-[36px] md:text-[56px] text-secondary mb-6 whitespace-nowrap">国际空间设计大奖—艾特奖章程</h1>
            <p class="font-body-md text-base text-on-surface-variant italic">IDEA-TOPS International Space Design Award Charter</p>
          </header>

          <div class="space-y-24">
            <!-- Chapter I: 总则 -->
            <section class="charter-section" id="general">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">01</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第一章：总则</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-6">
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第一条 奖项名称</h3>
                  <p class="font-body-md text-xl leading-relaxed">艾特奖，英文名：IDEA-TOPS，取"巅峰创意"之意，定位为国际空间设计大奖。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第二条 设立宗旨</h3>
                  <p class="font-body-md text-xl leading-relaxed">现代人的生活与空间品质休戚相关。艾特奖旨在发掘和表彰在城市设计、建筑设计、室内设计、景观设计、可持续发展等领域，在空间形式、技术应用、艺术表现及文化特质再现上，做出卓越的创新实践的设计师和设计机构，搭建全球空间设计的思想、观念交流与对话平台，打造全球具思想性和影响力的设计大奖，为全人类可持续的生活与栖居而贡献力量。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第三条 运营机构</h3>
                  <p class="font-body-md text-xl leading-relaxed">艾特国际设计产业（深圳）集团有限公司为艾特奖总运营机构。</p>
                </div>
              </div>
            </section>

            <!-- Chapter II: 奖项设置 -->
            <section class="charter-section" id="categories">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">02</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第二章：奖项设置</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-8">
                <div class="space-y-4">
                  <h3 class="font-label-sm text-lg text-secondary">第四条 奖项类别</h3>
                  <!-- A: Urban Design -->
                  <div class="pl-4 border-l border-secondary/20 space-y-1">
                    <p class="font-body-md text-white font-semibold">A、城市设计</p>
                    <p class="font-body-md text-on-surface-variant text-base">包括新城区城市设计、规划新建区域、城市更新、城中村改造、街区改造等。</p>
                  </div>
                  <!-- B: Architecture -->
                  <div class="pl-4 border-l border-secondary/20 space-y-1">
                    <p class="font-body-md text-white font-semibold">B、建筑设计</p>
                    <p class="font-body-md text-on-surface-variant text-base">1）文化建筑设计：博物馆、美术馆、图书馆、文化馆、文化艺术中心、展演类建筑等。</p>
                    <p class="font-body-md text-on-surface-variant text-base">2）教育建筑设计：高等院校、职业院校、中小学、幼儿园等校园办公及宿舍建筑。</p>
                    <p class="font-body-md text-on-surface-variant text-base">3）住宅建筑设计：独栋住宅、联排住宅、集合住宅、公寓等住宅类建筑。</p>
                    <p class="font-body-md text-on-surface-variant text-base">4）商业建筑设计：购物中心、商业街区、酒店、餐饮、娱乐类建筑等。</p>
                    <p class="font-body-md text-on-surface-variant text-base">5）公共建筑设计：办公楼、科技园、城市综合体、交通建筑、体育建筑、会展建筑等。</p>
                    <p class="font-body-md text-on-surface-variant text-base">6）绿色建筑设计：节约能源、低碳环保，促进与自然生态和谐共生的建筑。</p>
                    <p class="font-body-md text-on-surface-variant text-base">7）装配式建筑设计：采用装配式设计建造的各种建筑。</p>
                  </div>
                  <!-- C: Landscape -->
                  <div class="pl-4 border-l border-secondary/20 space-y-1">
                    <p class="font-body-md text-white font-semibold">C、景观设计</p>
                    <p class="font-body-md text-on-surface-variant text-base">1）都市景观设计：城市公园、广场、绿化景观带、街区等公共环境景观设计。</p>
                    <p class="font-body-md text-on-surface-variant text-base">2）社区景观设计：庭院景观、社区花园景观、社区开放空间等景观设计。</p>
                    <p class="font-body-md text-on-surface-variant text-base">3）生态景观设计：风景区、郊野公园、自然生态保护区、森林公园、地质公园等景观设计。</p>
                  </div>
                  <!-- D: Interior -->
                  <div class="pl-4 border-l border-secondary/20 space-y-1">
                    <p class="font-body-md text-white font-semibold">D、室内设计</p>
                    <p class="font-body-md text-on-surface-variant text-base">1）文化空间设计：学校、教堂、博物馆、音乐厅、影剧院等文化教育功能的公共空间。</p>
                    <p class="font-body-md text-on-surface-variant text-base">2）办公空间设计：各类办公场所，包括总部大楼、现代服务机构营业场所、小型办公、共享办公等空间。</p>
                    <p class="font-body-md text-on-surface-variant text-base">3）商业空间设计：商场、专卖店、零售商店、美发中心、书店等各种商业空间。</p>
                    <p class="font-body-md text-on-surface-variant text-base">4）展示空间设计：展厅或不同于零售店的产品、服务宣传展示场所，包括房地产营销中心、会展搭建的临时展销厅等。</p>
                    <p class="font-body-md text-on-surface-variant text-base">5）餐饮空间设计：主题餐厅、酒楼、特色风味餐厅、连锁餐饮等各种餐饮空间。</p>
                    <p class="font-body-md text-on-surface-variant text-base">6）娱乐空间设计：酒吧、夜总会、俱乐部、影视、游艺等娱乐场所。</p>
                    <p class="font-body-md text-on-surface-variant text-base">7）酒店空间设计：各类酒店室内空间（酒店类别认定的标准是室内设计项目必须具有客房、大堂和公共服务等空间）。</p>
                    <p class="font-body-md text-on-surface-variant text-base">8）休闲空间设计：会所、水疗中心、SPA等各类休闲场所。</p>
                    <p class="font-body-md text-on-surface-variant text-base">9）居住空间设计：别墅、大平层、公寓、集合住宅等居住空间设计。</p>
                    <p class="font-body-md text-on-surface-variant text-base">10）陈设艺术设计：包括家具，软装，装饰画，艺术摆件等在内的室内软环境设计。</p>
                  </div>
                  <!-- E: Lighting -->
                  <div class="pl-4 border-l border-secondary/20 space-y-1">
                    <p class="font-body-md text-white font-semibold">E、光环境设计</p>
                    <p class="font-body-md text-on-surface-variant text-base">1）城市建筑光环境设计：建筑外部光环境、广场、公园、公共空间、街区、庭院、游乐场等夜景灯光设计。</p>
                    <p class="font-body-md text-on-surface-variant text-base">2）建筑室内光环境设计：文化艺术、商业、娱乐、展示类等各种公共建筑内部的光环境设计。</p>
                  </div>
                  <!-- F: Public Art -->
                  <div class="pl-4 border-l border-secondary/20 space-y-1">
                    <p class="font-body-md text-white font-semibold">F、城市公共艺术</p>
                    <p class="font-body-md text-on-surface-variant text-base">各类置于城市公共空间的艺术作品，包括艺术装置、光影艺术、科技艺术、城市雕塑等。</p>
                  </div>
                </div>

                <!-- Article 5: 奖项产生 -->
                <div class="space-y-4">
                  <h3 class="font-label-sm text-lg text-secondary">第五条 奖项产生</h3>
                  <p class="font-body-md text-xl leading-relaxed"><strong>1、奖项设置：</strong>根据获奖进阶次序依次为：城市入围奖、城市十强（City TOP10）、国家级赛区五十强（Country TOP50），全球五强（Global TOP5），全球最佳设计大奖。另外，可设置特别奖项。</p>
                  <p class="font-body-md text-xl leading-relaxed"><strong>2、评选流程：</strong></p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）城市入围奖：由专家评审团对本城市参赛作品进行评审，评出各专业类别的城市入围奖，授予艾特奖·城市入围奖荣誉证书。</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）城市十强（City TOP10）：以城市为赛区，城市入围奖作品才有资格进入城市十强评审环节，由专家评审团按专业类别评选出城市十强，授予艾特奖·城市十强荣誉证书。</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）国家级赛区五十强（Country TOP50）：以国家为赛区，各城市赛区十强作品才有资格进入国家级赛区五十强评审环节，由专家评审团按专业类别筛选评出国家级赛区五十强，授予艾特奖·XX国赛区五十强荣誉证书，同时授予荣誉奖牌一面。</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">4）全球五强（Global TOP5）：国家级赛区五十强获奖作品方可进入艾特奖全球五强评审环节，由艾特奖国际评审团按专业类别筛选评出各专业类别全球五强。由艾特奖组委会统一签署授予艾特奖·全球五强荣誉证书及奖牌一面。</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">5）全球最佳设计大奖：由艾特奖国际评审团在艾特奖全球五强获奖作品中，按专业类别筛选评出最佳设计大奖，每个类别全球仅限1名，授予艾特奖·全球最佳设计大奖荣誉证书及艾特奖奖杯一座。</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">6）依据本届参赛作品质量，各类别、各层级奖项可以全部或部分空缺。</p>
                </div>
              </div>
            </section>

            <!-- Chapter III: 参赛规则 -->
            <section class="charter-section" id="entry-rules">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">03</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第三章：参赛规则</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-8">
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第六条 参赛条件</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、面向全球公开征选，参赛者不受民族、宗教、地域、国别的限制。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、参赛作品必须为两年内竣工（从投稿日期倒推两年）项目，参赛作品图片必须为竣工后的实景照片。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、集体创作的作品必须标明主创设计师姓名或主创设计公司名称。</p>
                  <p class="font-body-md text-xl leading-relaxed">4、参赛作品为合作项目时，必须注明合作单位及分工明细。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第七条 参赛时间</h3>
                  <p class="font-body-md text-xl leading-relaxed">第15届艾特奖作品征集截止时间：2025年12月31日</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第八条 参赛步骤</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、登陆艾特奖官方网站（www.idea-tops.com），选择语言版本进入参赛栏目，点击"立即报名"。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、上传参赛作品，提交参赛资料。须提交的资料包括：</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）遴选不少于10张充分体现参赛作品创意亮点和风格的实景图片，图片要求为JPG、JPEG、GIF、PNG、BMP格式，分辨率不低于300dpi；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）平面图、施工图及表明其他设计特点的相关资料不超过5张图片，图片分辨率不低于300dpi；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）设计理念的文字阐释与说明（不超过2000字）。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、参赛作品资料完善后，在线支付参赛费，支付成功即参赛成功。</p>
                  <p class="font-body-md text-xl leading-relaxed">4、在线填写《艾特奖参赛申请表》，进入评审系统。主办方将对参评材料进行审查，材料不完整、有明显错误纰漏、参赛类别不匹配、不符合参评要求的相关材料，主办方会引导参赛者进行修正，约定期限内未修正可视为无效或作废。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary mb-2">第九条 参赛费标准</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、中国大陆及港澳台地区：800元人民币/件作品；其他境外参赛者：150美金/件作品。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、作品确认参赛即须交纳参赛费。参赛并缴纳参赛费成功后，除不可抗力因素导致评选取消外，不能因参赛者任何主观原因退费。不论参赛结果如何，包括取消参赛资格，费用一律不退。</p>
                </div>
              </div>
            </section>

            <!-- Quote Block -->
            <section class="py-12 border-y border-secondary/10">
              <blockquote class="font-quote-italic text-2xl text-center text-on-surface max-w-2xl mx-auto">
                "设计不仅是它看起来和感觉起来的样子。设计是它如何运作以及如何与人类精神产生连接。"
              </blockquote>
            </section>

            <!-- Chapter IV: 评审 -->
            <section class="charter-section" id="jury">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">04</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第四章：评审</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-8">
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十条 评审团</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、评审团的职责包括制定及修订奖项的评审规则、实施办法，遴选年度评审委员，参与年度评审会议、审核最终获奖名单等工作。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、赛区评审团聘请本土及国内外资深人士担纲。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、国际评审团聘请全球资深专家、学者、顶尖建筑师和设计师、业界知名人士、财经专家、意见领袖以及有广泛影响力的媒体主编担纲组成。</p>
                  <p class="font-body-md text-xl leading-relaxed">4、所有担纲艾特奖评审工作的人士（含赛区）均由艾特奖组委会统一签署颁发聘书。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十一条 评审原则</h3>
                  <p class="font-body-md text-xl leading-relaxed">艾特奖评审工作秉持专业、严谨、公平、公正的原则，尊重每一位参赛设计师及其作品，文明评判、公平评分。以高度的专业标准、专业责任及严谨的态度开展奖项的评审。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十二条 评审标准</h3>
                  <p class="font-body-md text-xl leading-relaxed">艾特奖按创新性、功能性、艺术性、生态协调性四个方面对参赛作品进行评审。</p>
                  <p class="font-body-md text-xl leading-relaxed"><strong>1、创新性：</strong>具有独特的原创性设计理念与形式</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）设计观念与手法的创新性；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）技术及材料运用的独创性；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）创造性的设计艺术表现形式。</p>
                  <p class="font-body-md text-xl leading-relaxed"><strong>2、功能性：</strong>设计符合科学与专业规范的功能要求</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）功能上的巧思与使用上的创新；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）功能安排合理，以用户需求为出发点；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）功能与技术、环境的完美结合。</p>
                  <p class="font-body-md text-xl leading-relaxed"><strong>3、艺术性：</strong>具有高水平的美学品位、艺术追求和人文内涵</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）新颖独创的艺术表现形式；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）以人为本，突出人文内涵挖掘、突出的"在地性"文化艺术特色；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）艺术与工程技术的完美结合。</p>
                  <p class="font-body-md text-xl leading-relaxed"><strong>4、生态协调性：</strong>体现与自然生态的和谐共生</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）创造并引导绿色生态的生活方式；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）充分利用绿色科技，将环保与科技的创新完美融合；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）理解与充分利用地域与环境特质，建立环境友好的人居环境。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十三条 评审方式</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、艾特奖评审工作统一在艾特奖在线作品评审系统进行，根据需要可增加线下评审、项目实地勘察等环节，确保评审的科学性与严谨性。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、全部评审过程按评审标准进行，个别作品有异议的应组织复议，国际终评阶段评委需撰写获奖评语。</p>
                </div>
              </div>
            </section>

            <!-- Chapter V: 赛区设置 -->
            <section class="charter-section" id="division">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">05</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第五章：赛区设置</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-6">
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十四条 赛区设立</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、为广泛、深入发掘杰出设计人才及设计团队，搭建更为卓越的全球性赛事运营平台，全球范围内各国家和地区（地级市为基本赛区单元）均可向艾特奖总部提出申请，符合条件者可授权设立艾特奖城市或国家赛区。赛区实行授权制，申请机构需获得艾特奖总运营机构书面授权后，方可开展赛区运营工作。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、根据各个国家或地区的实际情况，在本章程的框架下可另行制定《国际赛区运行条例》。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、没有创立国际赛区的国家或地区可以经授权设立代表处。代表处开展艾特奖作品征集、宣传推广、国际赛区创建等筹备工作。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十五条 赛区组织机构</h3>
                  <p class="font-body-md text-xl leading-relaxed">各城市或国家赛区经艾特奖总部书面授权，可成立执行委员会（简称XX赛区执委会），负责该赛区各项赛务工作。赛区执委会成员由当地著名设计师、专家学者、地产界、媒体界等知名人士、有公信力和影响力的人士担任。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十六条 赛区职责</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、各赛区承担艾特奖的宣传推广、作品征集等事务。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、各赛区评审工作由艾特奖总部直接负责并最终公布。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、各赛区可以组织本赛区颁奖典礼，颁奖典礼须将活动方案提交艾特奖总部审议通过后方可执行。</p>
                </div>
              </div>
            </section>

            <!-- Chapter VI: 全球颁奖典礼 -->
            <section class="charter-section" id="ceremony">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">06</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第六章：全球颁奖典礼</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-6">
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十七条 颁奖说明</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、艾特奖全球最佳设计大奖是表彰杰出设计人才的重要奖项，授奖即是向全球昭告获奖者在设计界的崇高荣誉。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、艾特奖举行全球颁奖典礼，向艾特奖获得者颁发奖项，彰显对卓越设计人才的嘉奖与尊敬。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、艾特奖的全球颁奖典礼时间为每年的11月份（具体日期以艾特奖组委会公告为准）。</p>
                  <p class="font-body-md text-xl leading-relaxed">4、获奖者可在艾特奖官方网站（www.idea-tops.com）下载电子版获奖证书。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第十八条 奖项召回</h3>
                  <p class="font-body-md text-xl leading-relaxed">如参赛者获奖作品侵犯了他人的相关创意知识产权时，经查证属实的，艾特奖组委会有权收回已颁发的奖杯、奖牌及获奖证书，并在艾特奖官网上发布公告。</p>
                </div>
              </div>
            </section>

            <!-- Chapter VII: 奖项运营 -->
            <section class="charter-section" id="operation">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">07</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第七章：奖项运营</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-4">
                <h3 class="font-label-sm text-lg text-secondary">第十九条 奖项推广</h3>
                <p class="font-body-md text-xl leading-relaxed">1、<strong>作品收录：</strong>艾特奖官方网站（www.idea-tops.com）永久收录艾特奖获奖作品和获奖者信息。</p>
                <p class="font-body-md text-xl leading-relaxed">2、<strong>年鉴出版：</strong>艾特奖组委会可以组织出版《艾特奖获奖作品年鉴》。</p>
                <p class="font-body-md text-xl leading-relaxed">3、<strong>巡回推广：</strong>艾特奖组委会举办巡回推广活动，展示艾特奖获奖者的风采，传播艾特奖设计师前瞻性的革新思想与创造性的设计智慧，提升大众影响力。</p>
                <p class="font-body-md text-xl leading-relaxed">4、<strong>全球联动：</strong>艾特奖鼓励全球合作伙伴、各国家与地区赛区开展项目合作和学术交流活动，借此促进国际设计交流与合作。</p>
                <p class="font-body-md text-xl leading-relaxed">5、<strong>媒体传播：</strong>艾特奖优秀作品将同时进行线上、线下展示。并通过艾特奖在国内外合作媒体、行业知名杂志、互联网及新媒体等对外发布和传播。</p>
                <p class="font-body-md text-xl leading-relaxed">6、<strong>商业机会：</strong>艾特奖倡导"好项目、好设计"，鼓励全球合作伙伴、各国家和地区赛区为优质项目方和获奖者搭建合作平台。</p>
              </div>
            </section>

            <!-- Chapter VIII: 法律声明 -->
            <section class="charter-section" id="legal">
              <div class="flex items-baseline space-x-4 mb-8 justify-center">
                <span class="font-display-hero text-[56px] text-midnight-gray opacity-30 select-none">08</span>
                <h2 class="font-headline-md text-[32px] text-secondary">第八章：法律声明</h2>
              </div>
              <div class="border-t-[0.5px] border-midnight-gray pt-8 space-y-6">
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第二十条 法律声明</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、参赛者在报名时应当提供真实个人资料，大赛主办方对参赛者身份的真实性不作实质性审查，但是一经发现参赛者资料失实，可以取消其作品获奖、发表机会。</p>
                  <p class="font-body-md text-xl leading-relaxed">2、参赛者必须保证作品的原创性，不得抄袭、剽窃他人作品，保证不侵犯任何第三方知识产权或其他权利。如有涉及侵犯他人权利，参赛者应当自负全部法律责任，艾特奖组委会、主办方及承办机构对此不承担任何责任。如因参赛者的侵权行为导致主办方遭受损失的，主办方有权向侵权人追偿。</p>
                  <p class="font-body-md text-xl leading-relaxed">3、参赛者自行负责一切关于其参赛作品的知识产权保护问题，艾特奖组委会、主办方及承办机构对此不承担任何责任。</p>
                  <p class="font-body-md text-xl leading-relaxed">4、获奖者同意无偿提供并授予组委会如下权利：</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">1）组委会有权对获奖作品进行非商业性使用或委托出版社出版宣传；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">2）组委会拥有获奖作品的出版、展出权；</p>
                  <p class="font-body-md text-xl leading-relaxed pl-4">3）组委会对作品是否虚假申报不负核实义务，如有版权纠纷，概由参赛者自负责任。</p>
                  <p class="font-body-md text-xl leading-relaxed">5、参赛者请认真阅读本章程条款，一经报名参赛，即表明参赛者同意并遵守本章程所有条款。</p>
                </div>
                <div class="space-y-2">
                  <h3 class="font-label-sm text-lg text-secondary">第二十一条 附则</h3>
                  <p class="font-body-md text-xl leading-relaxed">1、本章程的最终解释权及修改权归主办单位；</p>
                  <p class="font-body-md text-xl leading-relaxed">2、本章程2022年1月19日起生效，原章程作废。</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'

defineOptions({ name: 'IdeaConstitution' })

const activeSection = ref('general')

const tocItems = [
  { id: 'general', label: '第一章：总则' },
  { id: 'categories', label: '第二章：奖项设置' },
  { id: 'entry-rules', label: '第三章：参赛规则' },
  { id: 'jury', label: '第四章：评审' },
  { id: 'division', label: '第五章：赛区设置' },
  { id: 'ceremony', label: '第六章：全球颁奖典礼' },
  { id: 'operation', label: '第七章：奖项运营' },
  { id: 'legal', label: '第八章：法律声明' },
]

function scrollToSection(id: string) {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ─── Scroll Spy ──────────────────────────────────────
let scrollHandler: (() => void) | null = null

onMounted(() => {
  const sectionIds = tocItems.map((t) => t.id)
  const sections: { id: string; top: number }[] = []

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) sections.push({ id, top: el.offsetTop })
  })

  scrollHandler = () => {
    const scrollY = window.scrollY + 200
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollY >= sections[i]!.top) {
        activeSection.value = sections[i]!.id
        break
      }
    }
  }
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onBeforeUnmount(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>
