import React from 'react';
import { ArrowLeft, Brain, HeartPulse, Sparkles, ShieldCheck, Moon, Wind, Menu, Instagram, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const services = [
  { icon: Brain, title: 'ارزیابی و مشاوره تخصصی', text: 'شناخت دقیق‌تر شرایط شما و طراحی مسیر مراقبت متناسب با نیازهایتان.' },
  { icon: Moon, title: 'خواب و آرامش ذهن', text: 'بررسی دشواری‌های خواب، اضطراب شبانه و راهکارهای بهبود آرامش.' },
  { icon: HeartPulse, title: 'مدیریت اضطراب و خلق', text: 'همراهی حرفه‌ای برای عبور از دوره‌های دشوار و ساختن عادت‌های پایدار.' },
  { icon: Wind, title: 'سلامت روان و تمرکز', text: 'توجه به تمرکز، فرسودگی ذهنی و کیفیت زندگی روزمره.' },
];

const steps = [
  ['01', 'گفت‌وگوی اولیه', 'درباره دغدغه‌ها، شرایط فعلی و آنچه می‌خواهید تغییر کند صحبت می‌کنیم.'],
  ['02', 'شناخت و ارزیابی', 'با نگاهی دقیق و بدون قضاوت، نیازها و گزینه‌های مناسب را بررسی می‌کنیم.'],
  ['03', 'مسیر متناسب با شما', 'گام‌های بعدی را روشن می‌کنیم و در طول مسیر، پیشرفت را بازبینی می‌کنیم.'],
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const nav = [['درباره ما','#about'],['خدمات','#services'],['رویکرد ما','#approach'],['مقالات','#articles'],['تماس','#contact']];
  return <div className="site-shell">
    <div className="site-background" aria-hidden="true"><iframe src="https://assets.pinterest.com/ext/embed.html?id=655344183306157655" title="MINDORA background ambience" loading="lazy" scrolling="no" /></div>
    <header className="navbar">
      <a className="brand" href="#home" aria-label="MINDORA خانه"><span className="brand-mark"><Brain size={23}/></span><span><b>MINDORA</b><small>MENTAL WELLNESS</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="باز کردن منو"><Menu/></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-cta" href="#contact">گفت‌وگو را آغاز کنید <ArrowLeft size={16}/></a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-video-wrap"><video className="hero-video" autoPlay muted loop playsInline poster="https://i.pinimg.com/1200x/80/fd/0e/80fd0ecd3fd4247bc37171ca5e87ba45.jpg"><source src="https://v1.pinimg.com/videos/iht/expMp4/a5/2a/28/a52a2802732e5e4bbf56f297369cda2f_720w.mp4" type="video/mp4"/></video></div>
        <div className="hero-overlay"></div><div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-pill"><Sparkles size={14}/> مراقبت از ذهن، با نگاهی انسانی</div>
          <h1>آرامش، از <span>درون</span><br/>آغاز می‌شود.</h1>
          <p className="hero-copy">در MINDORA، مسیر سلامت روان با شنیدن، شناخت و همراهی آغاز می‌شود؛ فضایی امن برای درک بهتر خود و حرکت به سوی حال بهتر.</p>
          <div className="hero-actions"><a className="button button-gold" href="#services">آشنایی با خدمات <ArrowLeft size={17}/></a><a className="button button-ghost" href="#about">درباره رویکرد ما</a></div>
          <div className="hero-trust"><span><ShieldCheck size={17}/> همراهی بدون قضاوت</span><i></i><span><HeartPulse size={17}/> توجه به نیازهای شما</span></div>
        </div>
        <div className="hero-side-note"><span className="side-line"></span><span>YOUR MIND MATTERS</span></div>
        <a className="scroll-cue" href="#about"><span></span> برای کشف بیشتر پایین بروید</a>
      </section>

      <section className="intro section-pad" id="about"><div className="intro-symbol"><div className="symbol-orbit orbit-one"></div><div className="symbol-orbit orbit-two"></div><div className="symbol-core"><Brain size={48}/></div><span className="symbol-dot dot-a"></span><span className="symbol-dot dot-b"></span></div><div className="intro-copy"><span className="eyebrow">به MINDORA خوش آمدید</span><h2>هر ذهنی داستانی دارد.<br/><em>داستان شما مهم است.</em></h2><p>گاهی فقط به فضایی نیاز داریم که در آن شنیده شویم، پرسش‌هایمان را با آرامش مطرح کنیم و قدم بعدی را واضح‌تر ببینیم. ما باور داریم مراقبت مؤثر با احترام، اعتماد و شناخت فردی آغاز می‌شود.</p><a className="text-link" href="#approach">با رویکرد ما آشنا شوید <ArrowLeft size={16}/></a></div></section>

      <section className="services section-pad" id="services"><SectionHeading eyebrow="چگونه همراهتان هستیم" title="مراقبت متناسب با شما" text="هر فرد تجربه‌ای منحصربه‌فرد دارد؛ مسیر مراقبت نیز باید با همین نگاه شکل بگیرد."/><div className="service-grid">{services.map(({icon: Icon,title,text}, i) => <article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon size={24}/></span><span className="card-number">0{i+1}</span></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={'اطلاعات بیشتر درباره '+title}><ArrowLeft size={18}/></a></article>)}</div></section>

      <section className="approach section-pad" id="approach"><div className="approach-art"><div className="approach-ring ring-a"></div><div className="approach-ring ring-b"></div><div className="approach-center"><Sparkles size={38}/><span>Mind<br/>in balance</span></div><div className="float-tag tag-one">شناخت</div><div className="float-tag tag-two">تعادل</div><div className="float-tag tag-three">همراهی</div></div><div className="approach-copy"><span className="eyebrow">رویکرد ما</span><h2>علم، همدلی و<br/><em>نگاهی به تمام شما</em></h2><p>سلامت روان فقط به یک نشانه یا یک روز محدود نمی‌شود. تجربه‌های زندگی، خواب، روابط و شرایط فردی همگی بخشی از تصویر هستند. هدف ما ایجاد فضایی برای بررسی این تصویر با دقت و احترام است.</p><ul><li><CheckCircle2/> شنیدن دقیق و گفت‌وگوی روشن</li><li><CheckCircle2/> توجه به شرایط و اهداف فردی</li><li><CheckCircle2/> توضیح شفاف گزینه‌های پیش رو</li></ul><a className="button button-outline" href="#contact">بیشتر بدانید <ArrowLeft size={16}/></a></div></section>

      <section className="process section-pad"><SectionHeading eyebrow="قدم به قدم" title="مسیر شما، با وضوح بیشتر" text="شروع کردن لازم نیست پیچیده باشد. هر مرحله با گفت‌وگو و هماهنگی پیش می‌رود."/><div className="process-grid">{steps.map(([num,title,text])=><article className="process-card" key={num}><span className="process-num">{num}</span><div className="process-line"></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="quote-band"><div className="quote-mark">“</div><p>مراقبت از خود، نقطه مقابل قدرت نیست؛<br/><span>بخشی از ساختن آن است.</span></p><div className="quote-rule"></div><small>A GENTLER WAY FORWARD</small></section>

      <section className="articles section-pad" id="articles"><SectionHeading eyebrow="از مجله MINDORA" title="آگاهی، شروع تغییر است" text="یادداشت‌هایی برای شناخت بهتر ذهن و مراقبت از سلامت روان."/><div className="article-grid"><article className="article-card article-feature"><div className="article-art art-brain"><Brain size={66}/><span className="art-orbit"></span></div><div className="article-info"><span className="article-category">سلامت روان</span><h3>چطور به صدای ذهنمان با مهربانی گوش کنیم؟</h3><p>نگاهی به خودآگاهی و رابطه‌ای آرام‌تر با افکار روزمره.</p><a href="#contact">خواندن مقاله <ArrowLeft size={16}/></a></div></article><article className="article-card"><div className="article-art art-moon"><Moon size={54}/><span className="stars">✦　·　✧</span></div><div className="article-info"><span className="article-category">خواب و آرامش</span><h3>عادت‌های کوچک برای پایان آرام‌تر روز</h3><p>چند پیشنهاد ساده برای ساختن روال شبانه‌ای دلپذیرتر.</p><a href="#contact">خواندن مقاله <ArrowLeft size={16}/></a></div></article><article className="article-card"><div className="article-art art-leaf"><Wind size={54}/><span className="leaf-orbit"></span></div><div className="article-info"><span className="article-category">زندگی روزمره</span><h3>وقتی همه‌چیز زیاد به نظر می‌رسد</h3><p>چگونه مکث کنیم، اولویت‌ها را ببینیم و یک قدم برداریم.</p><a href="#contact">خواندن مقاله <ArrowLeft size={16}/></a></div></article></div><p className="demo-disclaimer">محتوای این بخش نمونه‌ی نمایشی است و پیش از انتشار باید با مطالب تأییدشده جایگزین شود.</p></section>

      <section className="contact section-pad" id="contact"><div className="contact-panel"><div className="contact-copy"><span className="eyebrow">اولین قدم</span><h2>جایی برای شروع<br/><em>گفت‌وگویی تازه</em></h2><p>اگر می‌خواهید درباره مسیر مناسب خود بیشتر بدانید، از راه‌های ارتباطی زیر استفاده کنید. اطلاعات تماس پیش از انتشار باید تأیید و تکمیل شوند.</p><div className="contact-items"><span><Phone size={17}/> اطلاعات تلفن پس از تأیید درج می‌شود</span><span><Mail size={17}/> ایمیل رسمی پس از تأیید درج می‌شود</span><span><MapPin size={17}/> نشانی مطب پس از تأیید درج می‌شود</span></div></div><div className="contact-art"><div className="contact-halo"><HeartPulse size={54}/></div><span className="halo-caption">A MOMENT FOR YOU</span><a className="button button-gold" href="#home">بازگشت به ابتدای صفحه <ArrowLeft size={17}/></a></div></div></section>
    </main>

    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><Brain size={22}/></span><span><b>MINDORA</b><small>MENTAL WELLNESS</small></span></a><p>فضایی برای آرامش ذهن و مراقبت آگاهانه.</p><div className="footer-social"><a href="#contact" aria-label="اینستاگرام"><Instagram size={18}/></a><a href="#contact" aria-label="ایمیل"><Mail size={18}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} MINDORA</span><span>تمام حقوق محفوظ است</span><a href="#home">بازگشت به بالا ↑</a></div></footer>
  </div>;
}