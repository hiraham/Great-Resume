import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      {/* About Section */}
      <section id="about">
        <div className="mt-6">
          <h1 className="text-6xl font-bold text-primary text-center">About</h1>
          <h2 className="text-4xl mb-4 text-white text-balance">About Me</h2>
          <div className="w-full md:w-1/2 pr-8">
            <h3 className="text-3xl font-semibold text-primary">
              Who We Are
            </h3>
            <p className="mt-4 text-lg text-white">
              We are a passionate team of developers and designers dedicated to creating exceptional digital experiences. With a focus on innovation and quality, we strive to bring your ideas to life and help your business succeed in the digital landscape.
            </p>
            <h3 className="text-3xl font-semibold text-primary mt-6">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-white">
              Our mission is to empower businesses with the tools and technologies they need to thrive in the digital age. We aim to deliver innovative solutions that enhance user engagement and drive growth.
            </p>
          </div>

          {/* Image Section (optional) */}
          {/* You can add an image here if needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
