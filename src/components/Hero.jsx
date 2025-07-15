function Hero() {
  return (
    <div>
      <div className="herosection">
        <div className="text-section">
          <p>HUBSPOT CUSTOMER PLATFORM</p>
          <h1>With HubSpot, you can have it all</h1>
          <p>
            Unify your growing business on one AI-powered platform that’s easy
            to use, delivers ROI in no time, and transforms customer happiness
            into your competitive edge
          </p>
          <button id="demo">Get a demo</button>
          <button id="start">Get started free</button>
        </div>
        <div className="image-section">
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/Homepage%20w_%20Customer%20Agent%20for%20Spotlight%20-%20Dimension%20Size%201216x838%20(1).png?width=1216&height=841&name=Homepage%20w_%20Customer%20Agent%20for%20Spotlight%20-%20Dimension%20Size%201216x838%20(1).png"
            alt="about us"  style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
