
import Header from "./components/Header.jsx";
import "./style/app.css";
import { PlayVideoIcon } from "./components/icons.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
function App() {

  const [videoPlay, setVideoPlay] = useState(false);

  function playVideo(){
    setVideoPlay(true);
  }

  return (
    <>
      <Header />
      <main className="main-page">

        <div className="hero hero--header container">
          <h1 className="hero__titulo">Ableton</h1>
        </div>

        <div className="main-page__text container">
          <h2 className="main-page__title">We make <a href="/live" className="main-page__link">Live</a>, <a href="/push" className="main-page__link">Push</a> and <a href="/link" className="main-page__link">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h2>
          <p className="main-page__description">
            Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
          </p>
        </div>

        <div className="lemon-collage container">
          <div className="lemon-collage__square"></div>
          <div className="lemon-collage__image1"></div>
          <div className="lemon-collage__image2"></div>
        </div>

        <div className="main-page__text container">
          <h2 className="main-page__title">Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h2>
          <p className="main-page__description">
            We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
          </p>
        </div>

        <div className="video-player">
          <figure className="video-player__miniatura">
            <div className="video-player__wrapper">
              <img alt="" className="video-player__img" data-src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=320" data-srcset="
              https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=320 320w,

              https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=768 768w,

              https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1024 1024w,

              https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1280 1280w,

              https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1440 1440w,

              https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;w=1462 1462w

            " src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress%2Cformat&amp;dpr=1.25&amp;ixjsv=1.1.3&amp;w=330" />
                <button className="video-player__reproductor" onClick={playVideo}><PlayVideoIcon /></button>
                {
                  videoPlay && <iframe className="video-player__video" src="https://www.youtube.com/embed/9SbnhgjeyXA?autoplay=1" title="YouTube video player" allow="autoplay" allowFullScreen></iframe>
                }
              
            </div>
            
            <figcaption className="video-player__caption">Why Ableton - Juanpe Bolivar</figcaption>
            
          </figure>
          
          
        </div>

        <div className="main-page__text container">
          <h2 className="main-page__title">We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h2>
          <p className="main-page__description">
            Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
          </p>
        </div>

        <div className="green-collage container">
          <div className="green-collage__square"></div>
          <div className="green-collage__img1"></div>
          <div className="green-collage__img2"></div>
          <div className="green-collage__img3"></div>
        </div>

        <div className="main-page__text container">
          <h2 className="main-page__title">We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h2>
          <p className="main-page__description">Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
          </p>
        </div>

        <div className="main-page__image container">
          <img src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&dpr=1.25&fit=crop&fm=jpg&ixjsv=1.1.3&w=330" alt="Imagen de controlador de sonido" />
        </div>

        <div className="main-page__text container">
          <h2 className="main-page__title">We’re passionate about what we do, but we’re equally passionate about improving who we are.</h2>
          <p className="main-page__description">We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
          <p className="main-page__description">Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
        </div>

        <div className="purple-collage container">
          <div className="purple-collage__square"></div>
          <div className="purple-collage__img1"></div>
          <div className="purple-collage__img2"></div>
        </div>

        <div className="main-page__text container">
          <h2 className="main-page__title">We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h2>
          <p className="main-page__description">
          If you&apos;re joining us in Berlin, we&apos;ll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
          </p>
        </div>

        <section className="lastest-jobs container">
          <img src="https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="lastest job image" className="lastest-jobs__image" />
          <div className="lastest-jobs__info">
            <h2 className="lastest-jobs__text">We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
            <a href="/jobs" className="lastest-jobs__link">See lastest jobs &gt;</a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default App
