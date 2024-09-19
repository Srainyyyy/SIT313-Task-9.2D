import React, { useState } from 'react';
import { Button, Segment, Dropdown } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // 页面特定样式
import './SignupPage.css';

const PremiumTrialPage = () => {
  const navigate = useNavigate();

  const [selectedTheme, setSelectedTheme] = useState('Light');
  const [bannerText, setBannerText] = useState('Welcome to Premium Features!');

  const themeOptions = [
    { key: 'light', text: 'Light', value: 'Light' },
    { key: 'dark', text: 'Dark', value: 'Dark' },
    { key: 'custom', text: 'Custom', value: 'Custom' },
  ];

  const handleBackToPlansClick = () => {
    // 返回到选择计划页面
    navigate('/plans');
  };

  const handlePurchaseClick = () => {
    // 跳转到支付页面
    navigate('/payment');
  };

  return (
    <div className="login-page">  
      <div className="premium-form-container">  
      <h1 className="form-title">Explore Premium Features</h1>
  
        <Segment>
        <h3>Customize Your Banner</h3>
          <p>Preview your custom banner text below:</p>
          <input
            type="text"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            placeholder="Enter your banner text"
            className="banner-input"
          />
          <Segment className="banner-preview">{bannerText}</Segment>
        </Segment>


        <Segment>
          <h3>Select a Theme</h3>
          <p>Choose from the available themes for your dashboard:</p>
          <Dropdown
            placeholder="Select Theme"
            fluid
            selection
            options={themeOptions}
            value={selectedTheme}
            onChange={(e, { value }) => setSelectedTheme(value)}
          />
          <Segment className={`theme-preview ${selectedTheme.toLowerCase()}-theme`}>
            {selectedTheme} Theme Preview
          </Segment>
        </Segment>

       
        <Segment>
          <h3>Content Control & Management Support</h3>
          <p>Gain access to advanced content control features and dedicated management support.</p>
          <ul>
            <li>Control over user-generated content</li>
            <li>Advanced analytics for content performance</li>
            <li>Priority support for technical issues</li>
          </ul>
        </Segment>

        {/* 按钮操作 */}
        <div className="premium-buttons">
          <Button primary className="re-plan-button" onClick={handleBackToPlansClick}>Back to Plans</Button>
          <Button secondary className="re-pur-button" onClick={handlePurchaseClick}>Purchase Premium</Button>
        </div>
      </div>
    </div>
  );
};

export default PremiumTrialPage;
