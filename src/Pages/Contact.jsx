import handshake from "../video/handshake.mp4";

function Contact() {
  return (
    <section id="Contact" className="w-full bg-base-100 py-20 px-4 md:px-8">
      {/* Main Container */}
      <div>
        <div className="w-full text-center mb-12 text-3xl font-bold text-base-content">
          <h1>Contact Me</h1>
        </div>
        <div className="relative w-full max-w-7xl mx-auto min-h-187.5 overflow-hidden rounded-3xl border border-base-300 shadow-2xl">
          {/* Background Video */}
          <video
            src={handshake}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 flex min-h-187.5 items-center justify-center p-6 md:p-10 lg:p-16">
            <div className="grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                  Let's Work Together
                </span>

                <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  Get In Touch
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Have a project idea, business website, web application,
                  portfolio website, or FlutterFlow mobile app in mind? Feel
                  free to reach out with your questions, project requirements,
                  collaboration opportunities, or even just to discuss an idea.
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-200">
                  I'm always excited to work on meaningful projects and help
                  businesses establish a strong online presence.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
                    <p className="text-sm text-gray-300">Response Time</p>
                    <p className="font-semibold text-white">Within 24 Hours</p>
                  </div>

                  <div className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
                    <p className="text-sm text-gray-300">Availability</p>
                    <p className="font-semibold text-white">
                      Open For Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Form */}
              <div className="w-full">
                <form className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <h2 className="mb-6 text-center text-2xl font-bold text-white">
                    Send a Message
                  </h2>

                  <div className="space-y-5">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-gray-300 outline-none transition focus:border-blue-400"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-gray-300 outline-none transition focus:border-blue-400"
                    />

                    <input
                      type="text"
                      placeholder="Project Type"
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-gray-300 outline-none transition focus:border-blue-400"
                    />

                    <textarea
                      rows="5"
                      placeholder="Tell me about your project..."
                      className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white placeholder:text-gray-300 outline-none transition focus:border-blue-400"
                    />

                    <a href="mailto:onyedikauwakwe@gmail.com">
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
                      >
                        Send Message
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="flex justify-center mt-12 px-4">
          <div className="w-full max-w-6xl overflow-hidden rounded-3xl shadow-xl">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.8378634729393!2d3.2380115706372568!3d6.546753999959341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85401e245ea7%3A0xb949edf4a6e302c!2s37a%20Shaba%20Ojo%20St%2C%20Ijegun%2C%20Lagos%20102213%2C%20Lagos!5e1!3m2!1sen!2sng!4v1755391781133!5m2!1sen!2sng"
                className="w-full h-75 md:h-100 lg:h-125 rounded-xl shadow-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="My Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
