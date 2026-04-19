// ============================================================
// DATA
// ============================================================
const AGENTS = [
  { id:'AGT-001', name:'前台小星', emoji:'🏪', type:'receptionist', typeName:'前台接待', status:'online', desc:'智能前台接待Agent，支持多语言对话、入住办理、退房结账', model:'GPT-4o Fine-tuned', owner:'张经理', created:'2024-01-15', uptime:'365天', tags:['多语言','入住办理','退房结账','发票开具'], skills:['身份核验','入住办理','退房结账','房卡发放','发票开具','夜间值守'], metrics:{conv:1247,resolve:'96.5%',rating:4.9}, perf:{speed:88,accuracy:96.5,satisfaction:96,resolve:92.3}, radar:[95,88,92,85,90,78] },
  { id:'AGT-002', name:'画像小慧', emoji:'🧠', type:'concierge', typeName:'宾客画像', status:'online', desc:'宾客画像Agent，客人画像构建、偏好记忆、历史行为分析、个性化推荐', model:'Claude 3 Opus', owner:'李主管', created:'2024-02-20', uptime:'330天', tags:['画像构建','偏好记忆','行为分析','个性推荐'], skills:['画像构建','偏好记忆','行为分析','个性推荐','历史追踪','标签管理'], metrics:{conv:856,resolve:'94.2%',rating:4.8}, perf:{speed:92,accuracy:94.2,satisfaction:94,resolve:89.5}, radar:[88,92,95,90,85,82] },
  { id:'AGT-003', name:'客房小美', emoji:'🛏️', type:'roomservice', typeName:'客房服务', status:'busy', desc:'客房服务Agent，负责客房清洁调度、minibar补充、维修报修', model:'GPT-4o', owner:'王主管', created:'2024-03-10', uptime:'310天', tags:['清洁调度','minibar','维修报修','布草管理'], skills:['清洁排班','物品补充','维修派单','布草管理','能耗管理','质量检查'], metrics:{conv:2103,resolve:'91.8%',rating:4.7}, perf:{speed:85,accuracy:91.8,satisfaction:90,resolve:88.2}, radar:[82,85,90,95,88,75] },
  { id:'AGT-004', name:'餐饮小厨', emoji:'🍽️', type:'restaurant', typeName:'餐饮服务', status:'online', desc:'餐饮服务Agent，管理餐厅预订、菜品推荐、送餐服务', model:'Gemini Pro', owner:'陈经理', created:'2024-04-05', uptime:'280天', tags:['餐厅预订','菜品推荐','送餐服务','过敏提醒'], skills:['餐位管理','菜单推荐','送餐调度','库存预警','过敏管理','营养分析'], metrics:{conv:967,resolve:'93.1%',rating:4.8}, perf:{speed:90,accuracy:93.1,satisfaction:92,resolve:90.1}, radar:[90,86,88,82,95,80] },
  { id:'AGT-005', name:'维修老赵', emoji:'🔧', type:'maintenance', typeName:'设施维护', status:'online', desc:'设施维护Agent，智能故障诊断、维修派单、预防性维护', model:'GPT-4o', owner:'赵工', created:'2024-05-15', uptime:'250天', tags:['故障诊断','维修派单','预防维护','能耗监控'], skills:['故障诊断','工单管理','备件管理','预防维护','能耗优化','供应商对接'], metrics:{conv:534,resolve:'97.2%',rating:4.9}, perf:{speed:78,accuracy:97.2,satisfaction:95,resolve:95.6}, radar:[75,95,85,88,80,92] },
  { id:'AGT-006', name:'营销小艾', emoji:'📢', type:'marketing', typeName:'营销推广', status:'online', desc:'营销推广Agent，精准营销、会员管理、活动策划', model:'Claude 3 Opus', owner:'刘总监', created:'2024-06-01', uptime:'230天', tags:['精准营销','会员管理','活动策划','社媒运营'], skills:['用户画像','精准推送','活动创建','数据分析','社媒管理','A/B测试'], metrics:{conv:1589,resolve:'89.5%',rating:4.6}, perf:{speed:82,accuracy:89.5,satisfaction:88,resolve:85.3}, radar:[85,80,78,75,88,95] },
  { id:'AGT-007', name:'安保卫士', emoji:'🛡️', type:'maintenance', typeName:'安保巡检', status:'online', desc:'安保巡检Agent，实时监控、异常告警、应急响应', model:'GPT-4o', owner:'刘队长', created:'2024-07-01', uptime:'200天', tags:['视频监控','异常告警','巡检调度','应急响应'], skills:['视频分析','人脸识别','巡更管理','应急预案','访客管理','消防监控'], metrics:{conv:312,resolve:'98.1%',rating:4.9}, perf:{speed:95,accuracy:98.1,satisfaction:97,resolve:96.8}, radar:[96,98,92,90,85,88] },
  { id:'AGT-008', name:'财务小算', emoji:'💰', type:'receptionist', typeName:'财务结算', status:'busy', desc:'财务结算Agent，自动对账、发票管理、成本分析', model:'GPT-4o', owner:'孙会计', created:'2024-08-10', uptime:'170天', tags:['自动对账','发票管理','成本分析','税务处理'], skills:['自动对账','发票开具','成本核算','预算管理','税务申报','审计支持'], metrics:{conv:421,resolve:'99.2%',rating:4.8}, perf:{speed:75,accuracy:99.2,satisfaction:93,resolve:98.5}, radar:[72,99,95,88,80,85] },
  { id:'AGT-009', name:'培训导师', emoji:'📚', type:'concierge', typeName:'培训管理', status:'offline', desc:'员工培训Agent，新员工带教、技能考核、知识库管理', model:'Claude 3 Opus', owner:'人力部', created:'2024-09-01', uptime:'150天', tags:['新人带教','技能考核','知识库','学习追踪'], skills:['课程推荐','考试出题','学习进度','能力评估','证书管理','案例分享'], metrics:{conv:189,resolve:'92.5%',rating:4.7}, perf:{speed:70,accuracy:92.5,satisfaction:91,resolve:90.2}, radar:[68,90,88,85,92,80] },
  { id:'AGT-010', name:'质检精灵', emoji:'✨', type:'marketing', typeName:'质量管理', status:'online', desc:'服务质量Agent，对话质检、服务评分、改进建议', model:'GPT-4o', owner:'品质部', created:'2024-10-01', uptime:'120天', tags:['对话质检','服务评分','改进建议','合规检查'], skills:['语音质检','情感分析','合规审查','评分建模','趋势分析','自动报告'], metrics:{conv:756,resolve:'95.3%',rating:4.8}, perf:{speed:88,accuracy:95.3,satisfaction:94,resolve:93.1}, radar:[85,94,90,88,92,96] }
];

const CONVERSATIONS = [
  { id:'C001', guest:'王先生', guestEmoji:'👨', agentId:'AGT-001', preview:'请问还有海景房吗？', time:'14:32', unread:2, messages:[
    {role:'agent',text:'您好，欢迎致电星辰酒店！我是前台小星，很高兴为您服务。请问有什么可以帮您？',time:'14:28'},
    {role:'guest',text:'你好，我想预订一间海景房，明天入住，住两晚。',time:'14:30'},
    {role:'agent',text:'好的王先生！让我为您查看明天的海景房空房情况...\n\n📋 查询结果：\n• 豪华海景大床房 - ¥1,280/晚 ✅ 有房\n• 海景双床房 - ¥1,180/晚 ✅ 有房\n• 海景套房 - ¥2,680/晚 ✅ 有房\n\n作为金卡会员，您可享受9折优惠。推荐您选择豪华海景大床房，高楼层视野极佳！',time:'14:31'},
    {role:'guest',text:'请问还有海景房吗？',time:'14:32'}
  ]},
  { id:'C002', guest:'李女士', guestEmoji:'👩', agentId:'AGT-002', preview:'帮我看看上次住的房型偏好', time:'14:15', unread:0, messages:[
    {role:'agent',text:'李女士您好，我是画像小慧。让我为您调取历史偏好档案。',time:'14:10'},
    {role:'guest',text:'帮我看看上次住的房型偏好',time:'14:15'},
    {role:'agent',text:'好的！根据您的历史入住记录：\n\n📋 偏好档案：\n• 房型偏好：高楼层海景大床房\n• 枕头：荞麦枕\n• 迷你吧：常备依云矿泉水\n• 温度：22°C\n\n已同步至客房管家，本次入住将自动配置。需要调整吗？',time:'14:16'}
  ]},
  { id:'C003', guest:'张先生', guestEmoji:'🧔', agentId:'AGT-003', preview:'房间空调好像不太凉快', time:'13:48', unread:1, messages:[
    {role:'guest',text:'房间空调好像不太凉快',time:'13:48'},
    {role:'agent',text:'张先生您好，非常抱歉给您带来不便！我已经记录了空调问题。\n\n🔧 处理进度：\n1. ✅ 已创建维修工单 #MT-2847\n2. ✅ 已通知维修师傅赵工\n3. ⏳ 预计15分钟内到达\n\n在等待期间，需要我为您送一台移动风扇吗？',time:'13:49'}
  ]}
];

const WORKFLOWS = [
  { name:'VIP入住流程', icon:'👑',
    nodes:[
      {id:'n1',name:'身份核验',icon:'🪪',bg:'rgba(99,102,241,0.2)',x:50,y:30,status:'done'},
      {id:'n2',name:'偏好匹配',icon:'❤️',bg:'rgba(236,72,153,0.2)',x:230,y:30,status:'done'},
      {id:'n3',name:'房间分配',icon:'🏠',bg:'rgba(16,185,129,0.2)',x:410,y:30,status:'running'},
      {id:'n4',name:'欢迎礼遇',icon:'🎁',bg:'rgba(245,158,11,0.2)',x:140,y:130,status:'pending'},
      {id:'n5',name:'管家对接',icon:'🤵',bg:'rgba(139,92,246,0.2)',x:320,y:130,status:'pending'}
    ],
    edges:[{from:'n1',to:'n2'},{from:'n2',to:'n3'},{from:'n3',to:'n4'},{from:'n3',to:'n5'}],
    steps:[
      {name:'身份核验',agent:'前台小星',status:'done',time:'2分钟'},
      {name:'偏好匹配',agent:'画像小慧',status:'done',time:'1分钟'},
      {name:'房间分配',agent:'客房小美',status:'running',time:'进行中...'},
      {name:'欢迎礼遇',agent:'餐饮小厨',status:'pending',time:'等待中'},
      {name:'管家对接',agent:'画像小慧',status:'pending',time:'等待中'}
    ]
  },
  { name:'投诉处理流程', icon:'⚡',
    nodes:[
      {id:'n1',name:'投诉受理',icon:'📝',bg:'rgba(239,68,68,0.2)',x:50,y:80,status:'done'},
      {id:'n2',name:'情感分析',icon:'😤',bg:'rgba(245,158,11,0.2)',x:230,y:30,status:'done'},
      {id:'n3',name:'问题诊断',icon:'🔍',bg:'rgba(99,102,241,0.2)',x:230,y:130,status:'running'},
      {id:'n4',name:'解决方案',icon:'💡',bg:'rgba(16,185,129,0.2)',x:410,y:80,status:'pending'}
    ],
    edges:[{from:'n1',to:'n2'},{from:'n1',to:'n3'},{from:'n2',to:'n4'},{from:'n3',to:'n4'}],
    steps:[
      {name:'投诉受理',agent:'前台小星',status:'done',time:'30秒'},
      {name:'情感分析',agent:'质检精灵',status:'done',time:'5秒'},
      {name:'问题诊断',agent:'维修老赵',status:'running',time:'进行中...'},
      {name:'解决方案',agent:'在线客服',status:'pending',time:'等待中'}
    ]
  },
  { name:'每日运营报告', icon:'📊',
    nodes:[
      {id:'n1',name:'数据采集',icon:'📡',bg:'rgba(6,182,212,0.2)',x:140,y:30,status:'done'},
      {id:'n2',name:'数据分析',icon:'📈',bg:'rgba(99,102,241,0.2)',x:320,y:30,status:'done'},
      {id:'n3',name:'报告生成',icon:'📄',bg:'rgba(16,185,129,0.2)',x:230,y:130,status:'running'}
    ],
    edges:[{from:'n1',to:'n2'},{from:'n2',to:'n3'}],
    steps:[
      {name:'数据采集',agent:'系统',status:'done',time:'10分钟'},
      {name:'数据分析',agent:'营销小艾',status:'done',time:'5分钟'},
      {name:'报告生成',agent:'质检精灵',status:'running',time:'进行中...'}
    ]
  }
];

const ACTIVE_WFS = [
  {name:'VIP入住 - 王先生',agents:'小星→小慧→小美',progress:60,color:'var(--c1)',status:'running'},
  {name:'投诉处理 - 812房',agents:'小星→老赵→小慧',progress:45,color:'var(--c5)',status:'running'},
  {name:'早餐备料',agents:'小厨→系统',progress:100,color:'var(--c3)',status:'done'},
  {name:'夜间巡检',agents:'安保卫士',progress:80,color:'var(--c4)',status:'running'}
];

const NOTIFS = [
  {icon:'🔔',bg:'rgba(99,102,241,0.15)',text:'Agent"前台小星"已完成今日第1247次对话',time:'2分钟前'},
  {icon:'⚠️',bg:'rgba(245,158,11,0.15)',text:'812房空调维修工单已创建，等待处理',time:'5分钟前'},
  {icon:'🎉',bg:'rgba(16,185,129,0.15)',text:'本周客户满意度达到96.8%，创新高！',time:'30分钟前'},
  {icon:'🔧',bg:'rgba(239,68,68,0.15)',text:'Agent"培训导师"已离线，建议检查',time:'1小时前'},
  {icon:'📊',bg:'rgba(139,92,246,0.15)',text:'日报已生成，点击查看详情',time:'2小时前'}
];

// ============================================================
// STATE
// ============================================================
let currentView = 'dashboard';
let currentChat = 0;
let currentAgent = 0;
let currentWf = 0;
let sidebarCollapsed = false;
let notifOpen = false;

// ============================================================
// NAVIGATION
// ============================================================
function switchView(name) {
  currentView = name;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === name));
  // Render view-specific content
  if (name === 'dashboard') renderDashboard();
  if (name === 'agents') renderAgentGrid();
  if (name === 'detail') renderDetail();
  if (name === 'chat') renderChat();
  if (name === 'analytics') renderAnalytics();
  if (name === 'orchestration') renderOrchestration();
}

function toggleSidebar() {
  sidebarCollapsed = !sidebarCollapsed;
  document.getElementById('sidebar').classList.toggle('collapsed', sidebarCollapsed);
}

function toggleNotif() {
  notifOpen = !notifOpen;
  document.getElementById('notifPanel').classList.toggle('show', notifOpen);
  if (notifOpen) renderNotifications();
}

function clearNotif() { document.getElementById('notifList').innerHTML = '<div style="padding:20px;text-align:center;color:var(--text3)">暂无新通知</div>'; }

function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }

function showToast(msg, type='info') {
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = msg;
  wrap.appendChild(t);
  setTimeout(() => { t.classList.add('hide'); setTimeout(() => t.remove(), 300); }, 3000);
}

// ============================================================
// PARTICLES
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 60; i++) {
    particles.push({ x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3, r: Math.random()*1.5+0.5, o: Math.random()*0.5+0.1 });
  }
  function draw() {
    ctx.clearRect(0,0,w,h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(99,102,241,${p.o})`; ctx.fill();
    });
    // Lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if (dist < 150) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${0.06*(1-dist/150)})`; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================================================
// CLOCK
// ============================================================
function updateClock() {
  const now = new Date();
  const pad = n => String(n).padStart(2,'0');
  const el = document.getElementById('clock');
  if (el) el.textContent = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const isFloat = String(target).includes('.');
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = isFloat ? current.toFixed(1) : Math.round(current).toLocaleString();
    }, 30);
  });
}

// ============================================================
// SPARKLINES
// ============================================================
function drawSparkline(id, data, color) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * step, y = h - ((v - min) / range) * (h - 4) - 2;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
  // Fill
  ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
  const grad = ctx.createLinearGradient(0,0,0,h);
  grad.addColorStop(0, color.replace(')', ',0.3)').replace('rgb','rgba'));
  grad.addColorStop(1, color.replace(')', ',0)').replace('rgb','rgba'));
  ctx.fillStyle = grad; ctx.fill();
}

// ============================================================
// CHART HELPERS (Canvas-based, no deps)
// ============================================================
function drawBarChart(canvasId, labels, datasets, opts={}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const cw = w - padding.left - padding.right, ch = h - padding.top - padding.bottom;

  const allVals = datasets.flatMap(d => d.data);
  const maxVal = Math.max(...allVals) * 1.15;
  const barGroupW = cw / labels.length;
  const barW = Math.min(barGroupW * 0.6 / datasets.length, 30);
  const gap = (barGroupW - barW * datasets.length) / 2;

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padding.top + ch - (ch / 5) * i;
    ctx.beginPath(); ctx.moveTo(padding.left, y); ctx.lineTo(w - padding.right, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '10px monospace'; ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal / 5 * i), padding.left - 8, y + 3);
  }

  // Labels
  ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
  labels.forEach((l, i) => { ctx.fillText(l, padding.left + barGroupW * i + barGroupW/2, h - 12); });

  // Bars
  datasets.forEach((ds, di) => {
    ds.data.forEach((v, i) => {
      const x = padding.left + barGroupW * i + gap + barW * di;
      const barH = (v / maxVal) * ch;
      const y = padding.top + ch - barH;
      const grad = ctx.createLinearGradient(x, y, x, padding.top + ch);
      grad.addColorStop(0, ds.color || 'rgba(99,102,241,0.8)');
      grad.addColorStop(1, (ds.color || 'rgba(99,102,241,0.8)').replace(/[\d.]+\)$/, '0.2)'));
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.roundRect(x, y, barW, barH, [4,4,0,0]); ctx.fill();
    });
  });
}

function drawLineChart(canvasId, labels, datasets, opts={}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;
  const p = { top:20, right:20, bottom:40, left:50 };
  const cw = w-p.left-p.right, ch = h-p.top-p.bottom;

  const allVals = datasets.flatMap(d => d.data);
  const maxVal = Math.max(...allVals)*1.15;
  const step = cw/(labels.length-1);

  // Grid
  ctx.strokeStyle='rgba(255,255,255,0.04)';ctx.lineWidth=1;
  for(let i=0;i<=5;i++){const y=p.top+ch-(ch/5)*i;ctx.beginPath();ctx.moveTo(p.left,y);ctx.lineTo(w-p.right,y);ctx.stroke();ctx.fillStyle='rgba(255,255,255,0.3)';ctx.font='10px monospace';ctx.textAlign='right';ctx.fillText(Math.round(maxVal/5*i),p.left-8,y+3)}
  ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='11px sans-serif';ctx.textAlign='center';
  labels.forEach((l,i)=>{ctx.fillText(l,p.left+step*i,h-12)});

  datasets.forEach(ds => {
    // Fill
    ctx.beginPath();
    ds.data.forEach((v,i)=>{const x=p.left+step*i,y=p.top+ch-(v/maxVal)*ch;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)});
    ctx.lineTo(p.left+step*(ds.data.length-1),p.top+ch);ctx.lineTo(p.left,p.top+ch);ctx.closePath();
    const grad=ctx.createLinearGradient(0,p.top,0,p.top+ch);
    grad.addColorStop(0,(ds.color||'rgba(99,102,241,1)').replace(/,1\)/,',0.15)').replace('rgb(','rgba('));
    grad.addColorStop(1,'rgba(99,102,241,0)');ctx.fillStyle=grad;ctx.fill();
    // Line
    ctx.beginPath();
    ds.data.forEach((v,i)=>{const x=p.left+step*i,y=p.top+ch-(v/maxVal)*ch;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)});
    ctx.strokeStyle=ds.color||'rgba(99,102,241,1)';ctx.lineWidth=2.5;ctx.stroke();
    // Dots
    ds.data.forEach((v,i)=>{const x=p.left+step*i,y=p.top+ch-(v/maxVal)*ch;ctx.beginPath();ctx.arc(x,y,3,0,Math.PI*2);ctx.fillStyle=ds.color||'rgba(99,102,241,1)';ctx.fill();ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.strokeStyle=ds.color||'rgba(99,102,241,1)';ctx.lineWidth=1;ctx.stroke()});
  });
}

function drawDoughnut(canvasId, data, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;
  const cx = w/2, cy = h/2 - 10;
  const r = Math.min(cx, cy) - 20;
  const total = data.reduce((a,b) => a+b.value, 0);
  let start = -Math.PI/2;

  data.forEach((d, i) => {
    const angle = (d.value/total) * Math.PI * 2;
    ctx.beginPath(); ctx.arc(cx, cy, r, start, start+angle);
    ctx.arc(cx, cy, r*0.6, start+angle, start, true);
    ctx.closePath(); ctx.fillStyle = colors[i]; ctx.fill();
    start += angle;
  });

  // Legend
  let ly = h - data.length * 16;
  ctx.font = '11px sans-serif';
  data.forEach((d, i) => {
    ctx.fillStyle = colors[i];
    ctx.fillRect(w/2 - 70, ly, 8, 8);
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.textAlign = 'left';
    ctx.fillText(`${d.label} ${d.value}`, w/2 - 56, ly+8);
    ly += 18;
  });
}

function drawRadar(canvasId, data, labels) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const w = rect.width, h = rect.height;
  const cx = w/2, cy = h/2;
  const r = Math.min(cx, cy) - 30;
  const n = data.length;
  const angleStep = (Math.PI*2)/n;

  // Grid
  for (let level = 1; level <= 5; level++) {
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const a = -Math.PI/2 + angleStep * i;
      const lr = r * level / 5;
      const x = cx + Math.cos(a) * lr, y = cy + Math.sin(a) * lr;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1; ctx.stroke();
  }

  // Axes
  for (let i = 0; i < n; i++) {
    const a = -Math.PI/2 + angleStep * i;
    ctx.beginPath(); ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a)*r, cy + Math.sin(a)*r);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.stroke();
    // Labels
    const lx = cx + Math.cos(a)*(r+16), ly = cy + Math.sin(a)*(r+16);
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(labels[i] || '', lx, ly);
  }

  // Data
  ctx.beginPath();
  data.forEach((v, i) => {
    const a = -Math.PI/2 + angleStep * i;
    const x = cx + Math.cos(a) * (v/100) * r, y = cy + Math.sin(a) * (v/100) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(99,102,241,0.15)'; ctx.fill();
  ctx.strokeStyle = 'rgba(99,102,241,0.8)'; ctx.lineWidth = 2; ctx.stroke();
  // Points
  data.forEach((v, i) => {
    const a = -Math.PI/2 + angleStep * i;
    const x = cx + Math.cos(a) * (v/100) * r, y = cy + Math.sin(a) * (v/100) * r;
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI*2); ctx.fillStyle = 'rgba(99,102,241,1)'; ctx.fill();
  });
}

// ============================================================
// RENDER: DASHBOARD
// ============================================================
function renderDashboard() {
  animateCounters();
  // Satisfaction bar
  setTimeout(() => { const f = document.getElementById('satisFill'); if(f) f.style.width = '96.8%'; }, 100);
  // Sparklines
  drawSparkline('spark1', [18,19,20,21,20,22,23,24], 'rgb(99,102,241)');
  drawSparkline('spark2', [14,15,14,16,17,16,18,18], 'rgb(16,185,129)');
  drawSparkline('spark3', [2800,3100,2900,3400,3200,3600,3847], 'rgb(245,158,11)');
  drawSparkline('spark4', [8,6,5,7,4,5,3], 'rgb(239,68,68)');
  // Trend chart
  drawLineChart('trendChart', ['周一','周二','周三','周四','周五','周六','周日'], [
    {data:[2800,3100,2900,3400,3200,3600,3847], color:'rgba(99,102,241,1)'},
    {data:[2200,2500,2300,2800,2600,3000,3100], color:'rgba(6,182,212,0.6)'}
  ]);
  // Pie chart
  drawDoughnut('pieChart', [
    {label:'前台接待',value:5},{label:'宾客画像',value:3},{label:'客房服务',value:4},{label:'餐饮服务',value:3},{label:'设施维护',value:3},{label:'营销推广',value:3}
  ], ['rgba(99,102,241,0.8)','rgba(6,182,212,0.8)','rgba(16,185,129,0.8)','rgba(245,158,11,0.8)','rgba(239,68,68,0.8)','rgba(139,92,246,0.8)']);
  // Agent live grid
  renderAgentLiveGrid('all');
}

function renderAgentLiveGrid(filter) {
  const grid = document.getElementById('agentLiveGrid');
  if (!grid) return;
  const agents = filter === 'all' ? AGENTS : AGENTS.filter(a => a.status === filter);
  grid.innerHTML = agents.map(a => `
    <div class="agent-live-item" onclick="viewAgent('${a.id}')">
      <div class="agent-live-avatar ${a.status}" style="background:rgba(99,102,241,0.1)">${a.emoji}</div>
      <div class="agent-live-info">
        <div class="agent-live-name">${a.name}</div>
        <div class="agent-live-stat">${a.typeName} · ${a.status==='online'?'🟢 在线':a.status==='busy'?'🟡 忙碌':'⚫ 离线'}</div>
      </div>
    </div>
  `).join('');
}

function filterStatus(status, btn) {
  btn.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderAgentLiveGrid(status);
}

function setChartPeriod(period, btn) {
  btn.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const periods = {
    week: {labels:['周一','周二','周三','周四','周五','周六','周日'], data:[2800,3100,2900,3400,3200,3600,3847]},
    month: {labels:['第1周','第2周','第3周','第4周'], data:[18500,21200,19800,23400]},
    year: {labels:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'], data:[65000,72000,68000,78000,82000,85000,92000,88000,95000,98000,102000,108000]}
  };
  const p = periods[period];
  drawLineChart('trendChart', p.labels, [{data:p.data, color:'rgba(99,102,241,1)'}]);
}

function refreshDashboard() {
  showToast('📊 数据已刷新', 'success');
  renderDashboard();
}

// ============================================================
// RENDER: AGENTS
// ============================================================
function renderAgentGrid() {
  const grid = document.getElementById('agentGrid');
  if (!grid) return;
  const search = (document.getElementById('agentSearch')?.value || '').toLowerCase();
  const typeF = document.getElementById('typeFilter')?.value || '';
  const statusF = document.getElementById('statusFilter')?.value || '';
  let agents = AGENTS.filter(a => {
    if (search && !a.name.toLowerCase().includes(search) && !a.typeName.toLowerCase().includes(search)) return false;
    if (typeF && a.type !== typeF) return false;
    if (statusF && a.status !== statusF) return false;
    return true;
  });
  grid.innerHTML = agents.map((a, i) => `
    <div class="agent-card" style="animation-delay:${i*0.05}s" onclick="viewAgent('${a.id}')">
      <div class="glow-bg"></div>
      <div class="agent-card-top">
        <div class="agent-card-avatar ${a.status}" style="background:rgba(99,102,241,0.12)">${a.emoji}</div>
        <div class="status-badge ${a.status}"><span class="pulse-dot-sm"></span>${a.status==='online'?'在线':a.status==='busy'?'忙碌':'离线'}</div>
      </div>
      <div class="agent-card-name">${a.name}</div>
      <div class="agent-card-desc">${a.desc}</div>
      <div class="agent-card-tags">${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="agent-card-metrics">
        <div><div class="metric-val">${typeof a.metrics.conv==='number'?a.metrics.conv.toLocaleString():a.metrics.conv}</div><div class="metric-label">对话量</div></div>
        <div><div class="metric-val">${a.metrics.resolve}</div><div class="metric-label">解决率</div></div>
        <div><div class="metric-val">${a.metrics.rating}</div><div class="metric-label">评分</div></div>
      </div>
      <div class="agent-card-actions">
        <button class="btn outline" onclick="event.stopPropagation();chatWithAgent('${a.id}')">对话</button>
        <button class="btn primary" onclick="event.stopPropagation();viewAgent('${a.id}')">详情</button>
      </div>
    </div>
  `).join('');
}

function viewAgent(id) {
  currentAgent = AGENTS.findIndex(a => a.id === id);
  switchView('detail');
}

function chatWithAgent(id) {
  const ci = CONVERSATIONS.findIndex(c => c.agentId === id);
  if (ci >= 0) currentChat = ci;
  switchView('chat');
}

function exportAgents() { showToast('📥 Agent数据已导出为Excel', 'success'); }

function createAgent() {
  const name = document.getElementById('newAgentName')?.value;
  if (!name) { showToast('⚠️ 请输入Agent名称', 'error'); return; }
  showToast(`✅ Agent "${name}" 创建成功！`, 'success');
  closeModal('createModal');
}

// ============================================================
// RENDER: DETAIL
// ============================================================
function renderDetail() {
  const a = AGENTS[currentAgent] || AGENTS[0];
  document.getElementById('detailAvatar').textContent = a.emoji;
  document.getElementById('detailName').textContent = a.name;
  document.getElementById('detailRole').textContent = `${a.typeName} · ${a.id}`;
  const badge = document.getElementById('detailBadge');
  badge.className = 'status-badge ' + a.status;
  badge.innerHTML = `<span class="pulse-dot-sm"></span>${a.status==='online'?'在线':a.status==='busy'?'忙碌':'离线'}`;

  // Info
  document.getElementById('detailInfo').innerHTML = [
    ['Agent ID', a.id], ['类型', a.typeName], ['创建时间', a.created],
    ['运行时长', a.uptime], ['模型版本', a.model], ['负责人', a.owner]
  ].map(([k,v]) => `<div class="info-row"><span>${k}</span><span>${v}</span></div>`).join('');

  // Performance
  const colors = ['rgba(99,102,241,0.8)','rgba(16,185,129,0.8)','rgba(245,158,11,0.8)','rgba(6,182,212,0.8)'];
  document.getElementById('detailPerf').innerHTML = [
    ['响应速度', a.perf.speed+'%', a.perf.speed], ['准确率', a.perf.accuracy+'%', a.perf.accuracy],
    ['满意度', a.perf.satisfaction+'%', a.perf.satisfaction], ['解决率', a.perf.resolve+'%', a.perf.resolve]
  ].map(([name,val,w], i) => `
    <div class="perf-item"><div class="perf-head"><span>${name}</span><span>${val}</span></div>
    <div class="perf-bar"><div class="perf-fill" style="width:${w}%;background:${colors[i]}"></div></div></div>
  `).join('');

  // Radar
  drawRadar('radarChart', a.radar, ['响应速度','准确率','多轮对话','任务完成','知识覆盖','学习能力']);

  // Skills
  document.getElementById('detailSkills').innerHTML = a.skills.map((s,i) => `<span class="skill-tag ${i<3?'active':''}">${s}</span>`).join('');

  // Conversations
  document.getElementById('detailConvList').innerHTML = [
    {avatar:'👨',name:'王先生',msg:'请问还有海景房吗？',time:'14:32'},
    {avatar:'👩',name:'李女士',msg:'能帮我延迟退房吗？',time:'13:15'},
    {avatar:'🧔',name:'张先生',msg:'我需要一个加床',time:'12:40'},
    {avatar:'👩‍💼',name:'陈女士',msg:'请问早餐几点开始？',time:'11:20'}
  ].map(c => `
    <div class="conv-item">
      <div class="conv-avatar">${c.avatar}</div>
      <div class="conv-text"><div class="conv-name">${c.name}</div><div class="conv-msg">${c.msg}</div></div>
      <div class="conv-time">${c.time}</div>
    </div>
  `).join('');

  // Logs
  document.getElementById('detailLogs').innerHTML = [
    {time:'14:32:15',level:'info',msg:'收到新对话请求 #C1248'},
    {time:'14:32:16',level:'info',msg:'意图识别: 房型查询 (confidence: 0.96)'},
    {time:'14:32:17',level:'info',msg:'调用ERP接口: 查询空房'},
    {time:'14:31:05',level:'warn',msg:'响应延迟超过2s阈值'},
    {time:'14:28:00',level:'info',msg:'会话开始 #C1248'},
    {time:'14:15:32',level:'error',msg:'ERP连接超时, 重试成功'},
    {time:'14:10:00',level:'info',msg:'完成对话 #C1247, 满意度: 5/5'}
  ].map(l => `
    <div class="log-item"><span class="log-time">${l.time}</span><span class="log-level ${l.level}">${l.level.toUpperCase()}</span><span class="log-msg">${l.msg}</span></div>
  `).join('');
}

// ============================================================
// RENDER: CHAT
// ============================================================
function renderChat() {
  // Chat list
  const list = document.getElementById('chatList');
  if (list) {
    list.innerHTML = CONVERSATIONS.map((c, i) => {
      const agent = AGENTS.find(a => a.id === c.agentId);
      return `
        <div class="chat-item ${i===currentChat?'active':''}" onclick="selectChat(${i})">
          <div class="chat-item-avatar" style="background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(6,182,212,0.2))">${c.guestEmoji}</div>
          <div class="chat-item-info">
            <div class="chat-item-name">${c.guest}<span class="time">${c.time}</span></div>
            <div class="chat-item-preview">${c.preview}</div>
          </div>
          ${c.unread ? `<div class="chat-item-badge">${c.unread}</div>` : ''}
        </div>
      `;
    }).join('');
  }
  renderChatMessages();
}

function selectChat(idx) {
  currentChat = idx;
  renderChat();
}

function renderChatMessages() {
  const conv = CONVERSATIONS[currentChat];
  if (!conv) return;
  const agent = AGENTS.find(a => a.id === conv.agentId);

  // Header
  document.getElementById('chatContactName').textContent = `${conv.guest}`;
  document.getElementById('chatContactStatus').textContent = `正在与 ${agent?.name||'Agent'} 对话`;

  // Messages
  const container = document.getElementById('chatMessages');
  if (!container) return;
  container.innerHTML = conv.messages.map(m => `
    <div class="msg ${m.role}">
      <div class="msg-avatar" style="background:${m.role==='agent'?'rgba(99,102,241,0.15)':'linear-gradient(135deg,var(--c4),var(--c7))'}">${m.role==='agent'?(agent?.emoji||'🤖'):conv.guestEmoji}</div>
      <div>
        <div class="msg-bubble">${m.text.replace(/\n/g,'<br>')}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function sendMsg() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  const conv = CONVERSATIONS[currentChat];
  const now = new Date();
  const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
  conv.messages.push({role:'guest', text, time});
  renderChatMessages();

  // Simulate agent reply
  setTimeout(() => {
    const replies = [
      '好的，我已收到您的请求，正在为您处理中...\n\n✅ 处理完成！如需其他帮助请随时告知。',
      '收到！让我为您查看相关信息...\n\n📋 已为您查询完毕，相关数据已同步到系统。',
      '明白了，让我来处理这个事项。\n\n✅ 操作已完成，预计2分钟内生效。如有问题请随时联系！',
      '感谢您的耐心等待！\n\n🔍 已查询到相关信息：\n根据您的需求，我建议您选择我们的豪华海景房，目前有特惠活动。\n\n需要我为您预订吗？'
    ];
    conv.messages.push({role:'agent', text:replies[Math.floor(Math.random()*replies.length)], time});
    renderChatMessages();
  }, 1500);
}

function quickCmd(text) {
  document.getElementById('chatInput').value = text;
  sendMsg();
}

function useSuggestion(el) {
  document.getElementById('chatInput').value = el.textContent;
}

function newConversation() { showToast('📝 已创建新对话', 'info'); }

// ============================================================
// RENDER: ANALYTICS
// ============================================================
function renderAnalytics() {
  // Efficiency chart
  drawBarChart('effChart',
    AGENTS.slice(0,6).map(a => a.name),
    [{data: AGENTS.slice(0,6).map(a => a.perf.accuracy), color:'rgba(99,102,241,0.8)'},
     {data: AGENTS.slice(0,6).map(a => a.perf.resolve), color:'rgba(6,182,212,0.6)'}]
  );
  // Topic chart
  drawDoughnut('topicChart', [
    {label:'入住咨询',value:35},{label:'房型查询',value:25},{label:'餐饮服务',value:18},{label:'投诉建议',value:12},{label:'其他',value:10}
  ], ['rgba(99,102,241,0.8)','rgba(6,182,212,0.8)','rgba(16,185,129,0.8)','rgba(245,158,11,0.8)','rgba(139,92,246,0.8)']);

  // Heatmap
  renderHeatmap();
  // Ranking
  renderRanking('satisfaction');
}

function renderHeatmap() {
  const el = document.getElementById('heatmap');
  if (!el) return;
  const hours = 24, days = 7;
  const dayNames = ['周一','周二','周三','周四','周五','周六','周日'];
  let html = '';
  for (let h = 0; h < hours; h++) {
    const val = Math.random();
    const intensity = val;
    const color = `rgba(99,102,241,${0.1+intensity*0.7})`;
    html += `<div class="heatmap-cell" style="background:${color}" data-tip="${h}:00 · ${Math.round(val*500)}次"></div>`;
  }
  el.innerHTML = html;
}

function renderRanking(type) {
  const sorted = [...AGENTS].sort((a,b) => {
    if (type === 'satisfaction') return b.perf.satisfaction - a.perf.satisfaction;
    if (type === 'efficiency') return b.perf.accuracy - a.perf.accuracy;
    return b.metrics.conv - a.metrics.conv;
  });
  const list = document.getElementById('rankList');
  if (!list) return;
  list.innerHTML = sorted.slice(0,8).map((a,i) => {
    const val = type==='satisfaction' ? a.perf.satisfaction+'%' : type==='efficiency' ? a.perf.accuracy+'%' : a.metrics.conv;
    const numClass = i===0?'top1':i===1?'top2':i===2?'top3':'';
    const barW = type==='volume' ? (a.metrics.conv/sorted[0].metrics.conv*100) : (type==='satisfaction'?a.perf.satisfaction:a.perf.accuracy);
    return `
      <div class="rank-item">
        <div class="rank-num ${numClass}">${i+1}</div>
        <div class="rank-avatar" style="background:rgba(99,102,241,0.1)">${a.emoji}</div>
        <div class="rank-info"><div class="rank-name">${a.name}</div><div class="rank-type">${a.typeName}</div></div>
        <div class="rank-score">${val}</div>
        <div class="rank-bar-wrap"><div class="rank-bar"><div class="rank-bar-fill" style="width:${barW}%"></div></div></div>
      </div>
    `;
  }).join('');
}

function setRank(type, btn) {
  btn.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderRanking(type);
}

// ============================================================
// RENDER: ORCHESTRATION
// ============================================================
function renderOrchestration() {
  // Templates
  const templates = document.getElementById('wfTemplates');
  if (templates) {
    templates.innerHTML = WORKFLOWS.map((wf,i) => `
      <div class="wf-template ${i===currentWf?'active':''}" onclick="selectWf(${i})">${wf.icon} ${wf.name}</div>
    `).join('');
  }
  renderWorkflowCanvas();
  renderOrchSteps();
  renderActiveWfs();
}

function selectWf(idx) {
  currentWf = idx;
  renderOrchestration();
}

function renderWorkflowCanvas() {
  const wf = WORKFLOWS[currentWf];
  const canvas = document.getElementById('orchCanvas');
  const svg = document.getElementById('orchSvg');
  if (!canvas || !svg) return;

  // Clear old nodes
  canvas.querySelectorAll('.orch-node').forEach(n => n.remove());

  // Edges
  let svgHtml = '';
  wf.edges.forEach(e => {
    const from = wf.nodes.find(n => n.id === e.from);
    const to = wf.nodes.find(n => n.id === e.to);
    if (from && to) {
      const x1=from.x+70, y1=from.y+25, x2=to.x+70, y2=to.y+25;
      svgHtml += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(99,102,241,0.15)" stroke-width="2"/>`;
      svgHtml += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(99,102,241,0.5)" stroke-width="2" stroke-dasharray="8 4" style="animation:flow-dash 1s linear infinite"/>`;
    }
  });
  svg.innerHTML = svgHtml;

  // Nodes
  wf.nodes.forEach(n => {
    const node = document.createElement('div');
    node.className = 'orch-node' + (n.status==='running'?' active':'');
    node.style.left = n.x+'px'; node.style.top = n.y+'px';
    node.innerHTML = `
      <div class="orch-node-icon" style="background:${n.bg}">${n.icon}</div>
      <div><div class="orch-node-name">${n.name}</div><div class="orch-node-status">${n.status==='done'?'✅ 完成':n.status==='running'?'⚡ 执行中':'⏳ 等待'}</div></div>
    `;
    canvas.appendChild(node);
  });
}

function renderOrchSteps() {
  const wf = WORKFLOWS[currentWf];
  const el = document.getElementById('orchSteps');
  if (!el) return;
  el.innerHTML = wf.steps.map((s,i) => `
    <div class="orch-step">
      <div class="orch-step-dot ${s.status==='done'?'done':s.status==='running'?'running':''}">${s.status==='done'?'✓':i+1}</div>
      <div class="orch-step-body"><div class="orch-step-name">${s.name}</div><div class="orch-step-agent">${s.agent} · ${s.time}</div></div>
    </div>
  `).join('');
}

function renderActiveWfs() {
  const el = document.getElementById('orchWfList');
  if (!el) return;
  el.innerHTML = ACTIVE_WFS.map(wf => `
    <div class="orch-wf-item">
      <div class="orch-wf-dot" style="background:${wf.color};${wf.status==='running'?'animation:breathe 2s ease-in-out infinite':''}"></div>
      <div class="orch-wf-info"><div class="orch-wf-name">${wf.name}</div><div class="orch-wf-agents">${wf.agents}</div></div>
      <div class="orch-progress"><div class="orch-progress-fill" style="width:${wf.progress}%;background:${wf.color}"></div></div>
    </div>
  `).join('');
}

function addWorkflow() { showToast('📋 新建工作流模板', 'info'); }

// ============================================================
// RENDER: NOTIFICATIONS
// ============================================================
function renderNotifications() {
  const el = document.getElementById('notifList');
  if (!el) return;
  el.innerHTML = NOTIFS.map(n => `
    <div class="notif-item">
      <div class="ni-icon" style="background:${n.bg}">${n.icon}</div>
      <div><div class="ni-text">${n.text}</div><div class="ni-time">${n.time}</div></div>
    </div>
  `).join('');
}

// ============================================================
// INIT
// ============================================================
function init() {
  initParticles();
  updateClock();
  setInterval(updateClock, 1000);
  renderDashboard();
  // Close notif on outside click
  document.addEventListener('click', e => {
    if (notifOpen && !e.target.closest('.notif-panel') && !e.target.closest('.icon-btn')) {
      notifOpen = false;
      document.getElementById('notifPanel').classList.remove('show');
    }
  });
  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); });
  });
}

// Polyfill roundRect for older browsers
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x,y,w,h,r) {
    if (!Array.isArray(r)) r = [r,r,r,r];
    this.moveTo(x+r[0],y);
    this.lineTo(x+w-r[1],y); this.quadraticCurveTo(x+w,y,x+w,y+r[1]);
    this.lineTo(x+w,y+h-r[2]); this.quadraticCurveTo(x+w,y+h,x+w-r[2],y+h);
    this.lineTo(x+r[3],y+h); this.quadraticCurveTo(x,y+h,x,y+h-r[3]);
    this.lineTo(x,y+r[0]); this.quadraticCurveTo(x,y,x+r[0],y);
    this.closePath();
  };
}

init();
