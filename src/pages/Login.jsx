import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Eye, EyeOff } from 'lucide-react';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isAnonymous, setIsAnonymous] = useState(false);

    return (
        <div className="login-container">
            <Card className="auth-card">
                <h2>{isLogin ? 'Welcome Back' : 'Join SheShield'}</h2>
                <p className="auth-subtitle">
                    {isLogin
                        ? 'Login to access your dashboard'
                        : 'Create an account to report and track securely'
                    }
                </p>

                <form className="auth-form">
                    <div className="form-group">
                        <label>Email or Phone</label>
                        <input type="text" placeholder="Enter your email or phone" />
                    </div>

                    {!isAnonymous && (
                        <div className="form-group">
                            <label>Password</label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    )}

                    {!isLogin && (
                        <div className="form-group checkbox-group">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={isAnonymous}
                                    onChange={() => setIsAnonymous(!isAnonymous)}
                                />
                                <span className="slider round"></span>
                            </label>
                            <span>Report Anonymously (No Password Required)</span>
                        </div>
                    )}

                    <div className="form-group">
                        <Button variant="primary" size="medium" className="full-width">
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    </div>

                    <div className="form-divider">OR</div>

                    <Button variant="secondary" size="medium" className="full-width">
                        Login with OTP
                    </Button>
                </form>

                <div className="auth-footer">
                    <p>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <button
                            className="link-btn"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? 'Register' : 'Login'}
                        </button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Login;
