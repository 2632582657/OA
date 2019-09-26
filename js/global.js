$(function () {
    //头部底部渲染
    $("#header").html(
        `<div class="logo_box">
           <a href="index.html">
           <img src="./images/OA/logo.png">
           </a>
        </div>
        <ul class="menu_box">
            <li class="">
                <a href="index.html">首页</a>
                <i class="blue_border"></i>
            </li>
            <li class="">
                <a href="">产品</a>
                <ul class="hover_menu">
                    <li><a href="OA.html">OA</a></li>
                    <li><a href="CRM.html">CRM</a></li>
                    <li><a href="HRM.html">HRM</a></li>
                    <li><a href="PM.html">PM</a></li>
                    <li><a href="study.html">企业培训</a></li>
                </ul>
                <i class="blue_border"></i>
            </li>
            <li class="">
                <a href="">解决方案</a>
                <ul class="hover_menu">
                    <li><a href="#">制造业</a></li>
                    <li><a href="#">服装业</a></li>
                    <li><a href="#">地产业</a></li>
                    <li><a href="#">商贸业</a></li>
                </ul>
                <i class="blue_border"></i>
            </li>
            <li class="">
                <a href="">服务与支持</a>
                <i class="blue_border"></i>
            </li>
            <li class="">
                <a href="">关于云创办公</a>
                <i class="blue_border"></i>
            </li>
        </ul>
        <div class="phone">
            <a>免费试用</a>
            <p><i></i>400-645-6677</p>
        </div>`
    )
    $('#footer').html(
        `<div class="brand_container">
        <div class="brand">
            <h2 class="primary" style="color: #000;margin-bottom: 15px">超过30万家企业使用云创办公</h2>
            <p>行业深耕，专业解决全流程、全周期办公需求，驱动企业数据化管理进程，实现高效自由的业务模式。</p>
            <div class="brand_content">
                <div class="brand_content_img">
                    <img src="./images/index/brand1.png" alt="">
                </div>
                <div class="brand_content_detail">
                    <p class="f_c">
                        一汽大众西部区，全球知名汽车品牌的营销团队。管理
                        人员超过1700多人，如何与伙伴保持紧密快速的业务沟
                        通，是大众西区业务目标达成的关键。
                    </p>
                    <h2 class="f_t">一汽大众</h2>
                    <p class="f_s">云创办公帮助大众年销售额增长120%</p>
                </div>
            </div>
            <div class="brand_btn">
                <ul>
                    <li>
                        <img src="./images/index/btn1.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn2.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn3.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn4.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn5.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn6.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn7.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn8.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn9.png" alt="">
                    </li>
                    <li>
                        <img src="./images/index/btn10.png" alt="">
                    </li>
                </ul>
            </div>
            <div style="margin-top: 60px">
                <h2 class="primary" style="color: #000;margin-bottom: 15px">超过30万家企业使用云创办公</h2>
                <p>行业深耕，专业解决全流程、全周期办公需求，驱动企业数据化管理进程，实现高效自由的业务模式。</p>
                <a class=" tiyan_btn bg_primary" href="#" style="color: #fff;margin-top: 45px">免费体验</a>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer_detail">
            <ul class="fun">
                <li><a href="#">功能</a></li>
                <li><a href="#">日程管理</a></li>
                <li><a href="#">移动审批</a></li>
                <li><a href="#">考勤打卡</a></li>
                <li><a href="#">工作汇报</a></li>
                <li><a href="#">物资采购</a></li>
            </ul>
            <ul class="fun">
                <li><a href="#">行业解决方案</a></li>
                <li><a href="#">地产业</a></li>
                <li><a href="#">服装业</a></li>
                <li><a href="#">制造业</a></li>
                <li><a href="#">商贸业</a></li>
            </ul>
            <ul class="fun">
                <li><a href="#">客户案例</a></li>
                <li><a href="#">产品定制</a></li>
                <li><a href="#">加盟合作</a></li>
            </ul>
            <ul class="fun">
                <li><a href="#">联系我们</a></li>
                <li><a href="#">400-645-667</a></li>
            </ul>
            <ul class="fun">
                <li><a href="#">关于我们</a></li>
                <li><a href="#">微信公众号</a></li>
                <li><img src="./images/OA/erweima.png"></li>
            </ul>
        </div>
        <div class="record">
            <div style="padding-right: 24px">
                <img src="./images/OA/logo.png">
            </div>
            <div class="rec">
                <p>Copyright &copy; 2018 青岛云创智能集团有限公司 版权所有 </p>
                <p>公司地址：山东省青岛市市北区龙城路31号卓越世纪中心4号楼6L</p>
            </div>
        </div>
    </div>`
    )
})
$(window).load(function () {

    $(".menu_box li:nth-child(2)").hover(
        function () {
            $(this).children(".hover_menu").toggleClass('showmenu')
        }
    )
    $(".menu_box li:nth-child(3)").hover(
        function () {
            $(this).children(".hover_menu").toggleClass('showmenu')
        }
    )
    $('.menu_box li').mouseenter(function () {
        $(this).children(".blue_border").css('width', '100%')
    }).mouseleave(function () {
        $(this).children(".blue_border").css('width', '0%')
    })
    $('.hover_menu>li').hover(function () {
        $(this).toggleClass("show")
    })
    // ============================
    var index = 1
    $(".yuan_hover_box").mouseenter(function () {
        index++;
        $(this).parent().css({ transform: "scale(1.1)", zIndex: index })
    }).mouseleave(function () {
        $(this).parent().css({ transform: "scale(1)", zIndex: 0 })
    })







    // ================================
    $(".huankuai_box").click(function () {
        // console.log($(this).children(".huankuai_btn"))
        $(this).children(".huankuai_btn").addClass('dblock').parent().parent().siblings().children(".huankuai_box").children(".huankuai_btn").removeClass("dblock");
        $(this).children(".huankuai_btn").next().addClass('dblock').parent().parent().nextAll().children(".huankuai_box").children(".huankuai_btn").next().removeClass("dblock")
        $($('.progress_title li')[$(this).parent().index()]).addClass('show_border').siblings().removeClass('show_border')
        switch ($(this).parent().index()) {
            case 0:
                $(".baitiao").css({ width: '10%' })
                break;
            case 1:
                $(".baitiao").css({ width: '30%' })
                break;
            case 2:
                $(".baitiao").css({ width: '50%' })
                break;
            case 3:
                $(".baitiao").css({ width: '70%' })
                break;
            case 4:
                $(".baitiao").css({ width: '90%' })
                break;
            default:
                break;
        }

    })



    // ======================

    $('.project_list .project_item').hover(function () {
        $(this).toggleClass("m_scale")
    })
    //=====================

    $('.industry_btn>div').hover(function () {
        var info = [
            {
                it: "实现数据化管理，制胜地产新时代",
                ic: "云创办公凭借在地产、互联网以及新兴技术领域的持续创新，以技术推动业务、以知识应对挑战，助力客户打造全方位商业地产IT体系。",
                url: "#"
            },
            {
                it: "重塑企业内外连接，打造新一代智慧工厂",
                ic: "从创新到卓越，云创办公利用综合解决方案，构建信息化IT基础架构，在企业网络、数据中心、网络安全及通信协作方面带来效益提升。",
                url: "#"
            },
            {
                it: "大数据驱动智能营销，从现在预见未来",
                ic: "云创办公全渠道智能服务，将日常所有运营数据进行系统整理、记录、分析，以直观的形式展现给用户各种商业数据，让数据价值清晰可见。",
                url: "#"
            },
            {
                it: "线上线下融合再升级，让新手也能快速开发部署",
                ic: "在云创办公海量数据下实时响应，实现服装数据分析可视化、移动化，动态智能分析，满足服装用户多变的数据分析需求。",
                url: "#"
            },
        ]
        $(this).addClass('btn_show').siblings().removeClass('btn_show')
        $('.industry_img img').attr('src', "./images/index/hangye" + $(this).index() + ".png")
        $(".i_t").html(info[$(this).index()].it)
        $(".i_c").html(info[$(this).index()].ic)
        $(".i_btn").attr("href", info[$(this).index()].url)
    })

    // ===================
    $('.pattern .pattern_left').hover(function () {
        $(this).toggleClass('pattern_left_bg')
    })













    // 底部信息
    $(".brand_btn ul li").on('click', function () {
        var title = [
            {
                fc: "一汽大众西部区，全球知名汽车品牌的营销团队。管理人员超过1700多人，如何与伙伴保持紧密快速的业务沟通，是大众西区业务目标达成的关键。",
                ft: "一汽大众",
                fs: "云创办公帮助大众年销售额增长120%"
            },
            {
                fc: "万科企业股份有限公司成立于1984年，经过30余年的发展，已成为国内先进的房地产公司。截止2016年底，万科地产已进入中国大陆65个城市，员工超过2万人。",
                ft: "万科集团",
                fs: "带你了解万科移动办公方法论"
            },
            {
                fc: "华大基因是一个专门从事生命科学的科技前沿机构，涉及人类、医学、农业、畜牧、濒危动物保护等分子遗传层面的科技研究，为中国和世界基因组科学的发展做出了突出贡献。",
                ft: "华大基因",
                fs: "助力基因科学快速发展"
            },
            {
                fc: "海尔集团作为全球大型家电知名品牌，与云创办公合作打造ihaier移动交互平台，致力为用户打造全流程体验，实现无处不连接、无时不协同、无人不分享的平台愿景。",
                ft: "海尔集团",
                fs: "云创办公帮助海尔构建共创共赢的生态体系"
            },
            {
                fc: "东北制药集团股份有限公司，始建于1946年，至今已有69年历史，是大型国有综合性制药企业集团，中国重要的药品生产与出口基地。连续七年进入中国制药业企业500强。",
                ft: "东北制药",
                fs: "助力制药集团信息化建设"
            },
            {
                fc: "银城地产集团股份有限公司创建于1993年，是一家以房地产开发、经营为核心业务的专业地产公司，具有国家一级开发企业资质。",
                ft: "银城地产",
                fs: "移动办公提升客户服务满意度"
            },
            {
                fc: "安井集团，中国的火锅丸子大王，中国大型的专业速冻食品生产企业之一。拥有8500多名员工，如何让全国一线促销员、车间普工成为一个整体，一直是安井管理层的管理重点。",
                ft: "安井集团",
                fs: "一夜之间云创办公让8500名员工成为一个整体"
            },
            {
                fc: "同济大学历史悠久，声誉卓著，是中国国立大学之一，经过多年发展，已成为一所具有国际影响力的综合性、研究型、国际化大学，综合实力位居国内高校前列。",
                ft: "同济大学",
                fs: "打造“智能校园”"
            },
            {
                fc: "华泰证券，成立于1990年，是中国证监会首批批准的综合类券商，也是全国较早获得创新试点资格的券商之一。营业机构遍布全国，旗下拥有多家大型控股分子公司。",
                ft: "华泰证券",
                fs: "协助千亿规模的券商移动办公转型"
            },
            {
                fc: "今麦郎面品有限公司是集生产、销售、研发于一体的现代化大型综合食品企业集团。作为全国食品行业的龙头企业，如何高效进行采购管理和人员安排，是企业管理的一大难题。",
                ft: "今麦郎",
                fs: "数字化转型，改变员工工作方式"
            }
        ]
        var i = $(this).index() + 1
        $('.brand_content_img').children('img').attr('src', './images/index/brand' + i + '.png')
        $(".f_c").html(title[$(this).index()].fc)
        $(".f_t").html(title[$(this).index()].ft)
        $(".f_s").html(title[$(this).index()].fs)
    })






    //动画
    $(function () {
        var now = document.documentElement.scrollTop || document.body.scrollTop;
        if (now >= 0) {
            $('#leftout1').addClass('animated fadeInLeft');
            $('#rightout1').addClass('animated fadeInRight dalay-5s');
        }
        window.addEventListener("scroll", function (e) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop)
            if (scrollTop > 900) {
                $('#leftout1').addClass('animated fadeInLeft');
                $('#rightout1').addClass('animated fadeInRight dalay-5s');
            }
            if (scrollTop > 1500) {
                $('#leftout2').addClass('animated fadeInLeft');
                $('#rightout2').addClass('animated fadeInRight');
            }
            if (scrollTop > 2000) {
                $('#leftout3').addClass('animated fadeInLeft');
                $('#rightout3').addClass('animated fadeInRight');
            }
            if (scrollTop > 2500) {
                $('#leftout4').addClass('animated fadeInLeft');
                $('#rightout4').addClass('animated fadeInRight');
            }
            if (scrollTop > 3000) {
                $('#leftout5').addClass('animated fadeInLeft');
                $('#rightout5').addClass('animated fadeInRight');
            }
        });
    });






})