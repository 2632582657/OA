// 顶部菜单数组
var topMenuArr=[
  {
    // title:"产品",
    // img:"./images/topNav_01.png",
    links:[
      {
        name:"OA-智慧企业办公平台",
        link:"./.html",
        img:"./images/f_oa.png",
        vice:[
          {
            v_title:"日程管理",
            url:"schedule.html"
          },{
            v_title:"数据分析",
          },{
            v_title:"考勤管理",
            url:"check.html"
          },{
            v_title:"任务协同",
            url:"task.html"
          },{
            v_title:"移动审批",
            url:"mobile.html"
          },{
            v_title:"文化制度",
            url:"culture.html"
          },{
            v_title:"采购报销",
            url:"procurement.html"
          },{
            v_title:"文档管理",
            url:"file.html"
          },{
            v_title:"资产管理",
          },{
            v_title:"会议管理",
          }
        ]
      },{
        name:"CRM-客户关系管理平台",
        link:"./.html",
        img:"./images/f_crm.png",
        vice:[
          {
            v_title:"客户画像",
          },{
            v_title:"订单管理"
          },{
            v_title:"客户数据校验"
          },{
            v_title:"智能表单"
          },{
            v_title:"商机管理"
          },{
            v_title:"设备资产管理"
          },{
            v_title:"销售预测"
          },{
            v_title:"多渠道服务受理"
          },{
            v_title:"客户信用与账户"
          },{
            v_title:"客服工作台"
          }
        ]
      },{
        name:"HRM-人力资源管理平台",
        link:"./.html",
        img:"./images/f_hrm.png",
        vice:[
          {
            v_title:"档案管理",
          },{
            v_title: "离职管理"
          },{
            v_title: "入职表单"
          },{
            v_title: "培训管理"
          },{
            v_title: "人事报表"
          },{
            v_title: "福利管理"
          },{
            v_title: "人事服务"
          },{
            v_title: "用工安全"
          }
        ]
      },{
        name:"PM-项目计划管理平台",
        link:"./.html",
        img:"./images/f_pm.png",
        vice:[
          {
            v_title:"文档管理",
          },{
            v_title: "智能提醒"
          },{
            v_title: "一键分享"
          },{
            v_title: "在线评论"
          },{
            v_title: "在线评审"
          },{
            v_title: "外部访问"
          },{
            v_title: "自动备份"
          },{
            v_title: "密码保护"
          }
        ]
      }
    ]
  },
  {
    // title:"解决方案",
    // img:"./images/topNav_02.png",

    links:[
      {
		name:"地产业解决方案",
        link:"./.html",
        img:"./images/s_dc.png"
      },{
		name:"商贸业解决方案",
        link:"./.html",
        img:"./images/s_sm.png"
      },{
        name:"服装业解决方案",
        link:"./.html",
        img:"./images/s_fz.png"
      },{
        name:"制造业解决方案",
        link:"./.html",
        img:"./images/s_zz.png"
      }
    ]
  },
  {
    // title:"服务体系",
    // img:"./images/topNav_02.png",

    links:[
      {
        name:"产品定制",
        link:"./.html",
        img:"./images/t_cp.png"
      },{
        name:"加盟合作",
        link:"./.html",
        img:"./images/t_jm.png"
      }
    ]
  },
  {
    // title:"关于云创智能",
    // img:"./images/topNav_02.png",

    links:[
      {
        name:"集团简介",
        link:"./.html",
        img:"./images/s_jt.png"
      },{
        name:"客户案例",
        link:"./.html",
        img:"./images/s_kh.png"
      },{
        name:"云创动态",
        link:"./.html",
        img:"./images/s_yc.png"
      },{
        name:"千帆计划",
        link:"./.html",
        img:"./images/s_qf.png"
      }
    ]
  }
];

// 菜单数组展示方法 传入顶部菜单数组下标
function showTopMenu(n,target){

  var itemData=topMenuArr[n];
  var html="";
  if(itemData){
    html+="<div class='menu'>";
    // html+="<div class='menuImg'><img src='"+itemData.img+"'></div><div class='menuList'><ul>"
      html+="<div class='menuList'><ul>"
    for(var i=0;i<itemData.links.length;i++){
      var one=itemData.links[i];
      if(one.name){
        html+="<li>";
        if(itemData.links[i].img) {
          html += "<p><img src='" + one.img + "'></p>";
        }
        html+="<a href='"+one.link+"'>"+one.name+"</a>";

        if(itemData.links[i].vice){
          for(var j=0;j<itemData.links[i].vice.length;j++){
            if(itemData.links[i].vice[j].v_title){
              let str;
              if(itemData.links[i].vice[j].url){
                str= `<span><a href='${itemData.links[i].vice[j].url}'>${itemData.links[i].vice[j].v_title}</a></span>`;
              }else{
                str= `<span>${itemData.links[i].vice[j].v_title}</span>`;
              }
              html+=str;
            }
          }
        }

        html+="</li>";
      }else{
        html+="<li style='opacity:0;'></li>";
      }
    }
    html+="</ul></div></div>";
    var ele=$("<div class='topMenu'>"+html+"</div>");
    if($(".header>.topMenu").length){
      $(".topMenu").html(html);
    }else{
      $(".header").append(ele);
    }
    $(".header").off("mouseleave");
    ele.off("mouseleave");
    ele.on("mouseleave",function(){
      // console.log(this);
      ele.remove();
    });
    $(".header").on("mouseleave",function(){
      $(".header>.topMenu").remove();
      // 移出添加class
      target.removeClass("active");
    });
  }
}


// 回归顶部
$(".top").click(function (e) {
  e.preventDefault();
  // var osTop = document.documentElement.scrollTop || document.body.scrollTop;
  // document.documentElement.scrollTop = document.body.scrollTop = -200;
  $('body,html').animate({scrollTop:0},500);
});


$(function(){
  var now=document.documentElement.scrollTop || document.body.scrollTop;
  if(now>=0){
    $('#leftout1').addClass('animated fadeInLeft');
    $('#rightout1').addClass('animated fadeInRight dalay-5s');
  }
  window.addEventListener("scroll",function(e){
    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>100){
      $('#leftout1').addClass('animated fadeInLeft');
      $('#rightout1').addClass('animated fadeInRight dalay-5s');
    }
    if(scrollTop>600){
      $('#leftout2').addClass('animated fadeInLeft');
      $('#rightout2').addClass('animated fadeInRight');
    }
    if(scrollTop>1500){
      $('#leftout3').addClass('animated fadeInLeft');
      $('#rightout3').addClass('animated fadeInRight');
    }
  });
});

$("#page").html(
  ` <div class="header" style="background:rgb(0, 0, 0)">
      <div class="topLogo"><a href="index.html"><img src="images/logo.png" alt=""></a></div>
      <div class="topNav">
          <ul class="topNavList">
              <li><a href="index.html">首页</a></li>
              <li><a href="#">产品<i></i></a></li>
              <li><a href="#">解决方案<i></i></a></li>
              <li><a href="#">服务体系</a></li>
              <li><a href="#">关于云创智能</a></li>
          </ul>
      </div>
      <div class="fr clear topPhone">
          <label>注册 / 登录</label>
          <span>
          <img src="./images/phoneIcon.png" alt="">
          <p class="fr p2">400-645-6677</p>
          </span>
      </div>
  </div> `
);
$("#footer").html(
  `<div class="foot_nav">
    <div class="foot_list">
        <ul>
            <li>产品中心</li>
            <li>解决方案</li>
            <li>服务与支持</li>
            <li>关于云创智能</li>
        </ul>
    </div>
  </div>
  <div class="foot_box">
    <div class="foot_list">
      <p><img src="images/logo.png"/> </p>
      <h1>Copyright © 2018 青岛云创智能集团有限公司 版权所有</h1>
    </div>
  </div>`
);

$(".topNav>.topNavList").on("mouseenter","li",function(){
  var target = $(this);
  var targetNum=target.index();
  // 添加进入class
  target.addClass("active").siblings().removeClass("active");
  switch(targetNum){
      case 1:
          // 产品
          showTopMenu(0,target);
          break;
      case 2:
          // 解决方案
          showTopMenu(1,target);
          break;
      case 3:
          // 服务体系
          showTopMenu(2,target);
          break;
      case 4:
          // 关于云创智能
          showTopMenu(3,target);
          break;
      default:
          $(".header>.topMenu").remove();
          target.off("mouseleave");
          target.on("mouseleave",function(){
              $(this).removeClass("active");
          });
  }
});
