export default function MyContact() {
  return (
    <section className="contact--section" id="MyContact" data-aos="fade-up">

      <div className="contact--container">
        <h2 className="contact--heading">Let's Connect</h2>
        <p className="contact--subtext">Feel free to reach out to me!</p>
        <form
          className="contact--form"
          action="https://formspree.io/f/mnnpbowb"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
