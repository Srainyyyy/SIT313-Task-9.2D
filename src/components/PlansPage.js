import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const PlansPage = () => {
  const navigate = useNavigate();

  const handlePremiumClick = () => {
    // 跳转到支付页面
    navigate('/payment');
  };

  const handleFreeTrialClick = () => {
    // 跳转到高级功能的试用页面
    navigate('/premium-trial');
  };

  return (
    <div className="login-page">
      <div className="plans-form-container">
        <h1 className="form-title">Choose Your Plan</h1>
        <Container>
          <div className="plan-container">
            <div className="plan free-plan">
              <h3>Free Plan</h3>
              <p>Basic features including limited customization.</p>
              <Button primary className="free-button">Choose Free</Button>
            </div>

            <div className="plan premium-plan">
              <h3>Premium Plan</h3>
              <p>Includes advanced customization options, analytics dashboard, and more.</p>
              
              {/* 添加试用按钮 */}
              <Button className="try-free-button" onClick={handleFreeTrialClick}>Function preview</Button>

              {/* 高级计划按钮 */}
              <Button secondary className="prem-button" onClick={handlePremiumClick}>Choose Premium</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PlansPage;
