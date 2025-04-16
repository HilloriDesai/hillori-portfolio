import { MailIcon, LinkedinIcon } from "./icons";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-lg mb-8">
          I am currently open to new opportunities and collaborations. Feel free
          to reach out to discuss potential projects or just to say hello!
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a
            href="mailto:hilloridesai@gmail.com"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 flex items-center justify-center transition"
          >
            <MailIcon size={20} className="mr-2" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/hillori-desai-awasthi"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center transition"
          >
            <LinkedinIcon size={20} className="mr-2" />
            Connect on LinkedIn
          </a>
        </div>

        <div className="text-gray-600">
          <p>Bangalore, India</p>
          <p>hilloridesai@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
