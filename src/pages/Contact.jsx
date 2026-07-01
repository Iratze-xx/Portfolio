import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();
  const contactEmail =
    import.meta.env.VITE_APP_CONTACT_EMAIL || "yourname@email.com";
  const directEmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contactEmail
  )}&su=${encodeURIComponent("Portfolio Inquiry")}`;
  const contactFormUrl = `https://formsubmit.co/ajax/${encodeURIComponent(
    contactEmail
  )}`;
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    try {
      const response = await fetch(contactFormUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio Inquiry: ${form.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await response.json();

      if (!response.ok || data.success === "false") {
        throw new Error(data.message || "Unable to send message");
      }

      setLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message. I will get back to you soon.",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        setCurrentAnimation("idle");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, [3000]);
    } catch (error) {
      setLoading(false);
      console.error(error);
      setCurrentAnimation("idle");

      const needsActivation =
        error.message?.toLowerCase().includes("activation");
      const openedAsFile =
        error.message?.toLowerCase().includes("web server");

      showAlert({
        show: true,
        text: needsActivation
          ? `Please check ${contactEmail} and click the FormSubmit activation link, then try again.`
          : openedAsFile
          ? "Please run the site with npm run dev or deploy it first, then try sending again."
          : "I did not receive your message. Please email me directly.",
        type: "danger",
      });
    }
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Let's Work Together</h1>

        <div className='mt-5 flex flex-col gap-4 text-slate-600'>
          <p>
            Have a project, collaboration, or opportunity in mind? Send me a
            message and I will get back to you as soon as I can.
          </p>

          <a
            href={directEmailUrl}
            target='_blank'
            rel='noreferrer'
            className='font-semibold text-blue-600 transition-colors hover:text-blue-800'
          >
            Email me directly: {contactEmail}
          </a>

          <p className='text-sm text-slate-500'>
            I usually respond within 1-2 business days.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-10'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Your name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='your.email@example.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Subject
            <input
              type='text'
              name='subject'
              className='input'
              placeholder='Project inquiry'
              required
              value={form.subject}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Tell me a little about what you need...'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
