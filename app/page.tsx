const dishes = [
  { name: '炭烤海鲈鱼', note: '春笋 · 青花椒 · 蛤蜊汁', price: '¥188' },
  { name: '慢烤谷饲牛肋', note: '焦糖洋葱 · 烟熏土豆泥', price: '¥228' },
  { name: '青柠罗勒挞', note: '开心果 · 海盐奶油', price: '¥78' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#home" aria-label="苔岚餐厅首页"><span className="brand-mark">苔</span><span>苔岚 · TAIRAN</span></a>
          <div className="nav-links"><a href="#story">关于</a><a href="#menu">菜单</a><a href="#visit">到访</a></div>
          <a className="nav-book" href="#reserve">预订餐桌 <span>↗</span></a>
        </nav>
        <div className="hero-image" aria-hidden="true" /><div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">当季风物 · 当代中式</p>
          <h1>山野有味，<br />四时入席。</h1>
          <p className="hero-copy">以江南风物为灵感，在城市里做一桌自然、克制而有温度的菜。</p>
          <div className="hero-actions"><a className="button button-light" href="#reserve">立即预订</a><a className="text-link" href="#menu">查看本季菜单 <span>→</span></a></div>
        </div>
        <div className="hero-meta"><span>上海 · 愚园路 98 号</span><span>午餐 11:30—14:30</span><span>晚餐 17:30—22:30</span></div>
      </section>

      <section className="intro" id="story">
        <div><p className="eyebrow">我们的餐桌</p><p className="section-number">01</p></div>
        <div className="intro-copy">
          <h2>一餐，是人与季节<br />最亲密的相遇。</h2>
          <p>我们拜访小型农场与在地渔获市场，只选择正当时的食材。主厨林屿以熟悉的东方味觉为根，借炭火、发酵与慢煨，呈现食物自然的层次。</p>
          <a className="ink-link" href="#menu">认识苔岚 <span>↗</span></a>
        </div>
        <div className="intro-image" role="img" aria-label="主厨正在为菜品摆盘" />
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-head">
          <div><p className="eyebrow light">本季菜单</p><p className="section-number light-number">02</p></div>
          <h2>春山美味</h2><p>菜单随节气而变，以下为本季精选。<br />七道式尝味菜单 ¥688 / 位</p>
        </div>
        <div className="dish-list">{dishes.map((dish, index) => <article className="dish" key={dish.name}><span className="dish-index">0{index + 1}</span><div><h3>{dish.name}</h3><p>{dish.note}</p></div><strong>{dish.price}</strong></article>)}</div>
        <a className="button button-outline" href="#reserve">浏览完整菜单</a>
      </section>

      <section className="visit" id="visit">
        <div className="visit-image" role="img" aria-label="苔岚餐厅温暖安静的用餐空间" />
        <div className="visit-copy" id="reserve">
          <p className="eyebrow">预订与到访</p><h2>留一席，<br />候一场好味。</h2>
          <div className="info-grid"><div><span>地址</span><p>上海市静安区<br />愚园路 98 号</p></div><div><span>营业时间</span><p>周二至周日<br />11:30—22:30</p></div></div>
          <a className="button button-dark" href="tel:+862155558888">电话预订 · 021 5555 8888</a>
          <p className="reserve-note">6 人以上用餐或特别需求，请提前致电与我们联系。</p>
        </div>
      </section>
      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">苔</span><span>苔岚 · TAIRAN</span></a><p>让一餐，慢下来。</p><div><a href="#home">小红书</a><a href="#home">微信公众号</a><a href="#home">返回顶部 ↑</a></div></footer>
    </main>
  );
}
