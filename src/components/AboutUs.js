// src/pages/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Top Section with Background Color */}
      <section className="bg-gradient-to-r from-[#2A7F3C] via-[#B3864A] to-[#6B4E9A] text-white text-center py-12 px-6 rounded-lg mb-10">
        <h1 className="text-4xl font-bold mb-6">About Fuller Cleanze</h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          At Fuller Cleanze, we believe in the wisdom of ancient practices when it comes to wellness. Our products are crafted with care to cleanse and revitalize the body, mind, and soul, offering a unique detox experience designed for relaxation and stress relief.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-12 text-justify">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg mb-6">
          Fuller Cleanze is a superb detox tonic that cleanses the body of impurities and promotes maximum health. Beyond its physical benefits, our products also aim to soothe the soul, providing a sense of relaxation and relief from stress. Each Fuller Cleanze package includes tea bags, essential oils, and bath salts to support holistic wellness.
        </p>
        <p className="text-lg mb-6">
          The primary components of our detox tea are three powerful herbs: Dandelion (Taraxacum officinale), Hyssop (Hyssopus officinalis), and Lavender (Lavandula angustifolia). Each of these herbs offers unique health benefits, which we explore in more detail below.
        </p>
      </section>

      {/* Herb Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">The Power of Our Herbs</h2>

        {/* Dandelion Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 text-justify">
          <h3 className="text-2xl font-medium text-green-700 mb-2">Dandelion (Taraxacum officinale)</h3>
          <p className="text-lg leading-relaxed">
            Dandelion root offers numerous health benefits, including support for liver function, hormone balance, and toxin elimination. It is rich in iron, vitamins B and C, and omega-3 fatty acids, which nourish the body and support red blood cell formation. The bioactive compounds in dandelion, like chicoric acid, aid in regulating blood sugar, making it an essential part of our detox tea.
          </p>
        </div>

        {/* Hyssop Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 text-justify">
          <h3 className="text-2xl font-medium text-purple-700 mb-2">Hyssop (Hyssopus officinalis)</h3>
          <p className="text-lg leading-relaxed">
            Hyssop is high in flavonoids, which act as antioxidants to reduce inflammation and support cardiovascular health. This herb is known for its antibacterial properties and has been used traditionally for respiratory health and muscle cramps. Hyssop’s anti-inflammatory qualities make it an excellent addition to our detox blend.
          </p>
        </div>

        {/* Lavender Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
          <h3 className="text-2xl font-medium text-blue-700 mb-2">Lavender (Lavandula angustifolia)</h3>
          <p className="text-lg leading-relaxed">
            Known for its calming effects, lavender helps soothe the nervous system and relieve stress, anxiety, and insomnia. It also has anti-inflammatory properties, aiding in joint and muscle pain relief. Lavender’s gentle aroma promotes relaxation and is a key element in our products.
          </p>
        </div>
      </section>

      {/* Essential Oils Section */}
      <section className="mb-12 text-justify">
        <h2 className="text-3xl font-semibold mb-6 text-center">Fuller Cleanze Essential Oils</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Our essential oils can be applied directly to the skin for antiseptic benefits, or diffused to promote mental tranquility. Hyssop’s aroma encourages creativity, lavender’s scent relieves tension, and dandelion oil provides relief for sore muscles. Together, they create a powerful blend that soothes both body and mind.
        </p>
      </section>

      {/* Bath Salts Section */}
      <section className="mb-12 text-justify">
        <h2 className="text-3xl font-semibold mb-6 text-center">Fuller Cleanze Bath Salts</h2>
        <p className="text-lg leading-relaxed">
          Our bath salts offer a deeply immersive experience, helping to cleanse the body of toxins and promote relaxation. Use them for a full-body bath or a foot soak to enhance detoxification and stress relief, making them an essential part of the Fuller Cleanze wellness experience.
        </p>
      </section>

      {/* Spiritual Benefits Section */}
      <section className="mb-12 text-justify">
        <h2 className="text-3xl font-semibold mb-6 text-center">Spiritual Benefits of Fuller Cleanze</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Fuller Cleanze products provide mental and spiritual benefits. Our essential oils relieve nervous tension, creating peace for the soul. Hyssop, lavender, and dandelion have been used historically for spiritual purification, making our products ideal for holistic cleansing.
        </p>
      </section>

      {/* Final Note Section */}
      <section className="text-center bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">A Simple Ritual for Wellness</h2>
        <p className="text-lg mb-6 leading-relaxed">
          End your day with a calming ritual: light an aromatherapy bowl with a few drops of our essential oil blend, add Fuller Cleanze salts to your bath, and enjoy a cup of tea. This practice helps relax tense muscles, open pores, promote comfortable sleep, and support your well-being.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
