import React, { useState } from 'react';
import Auth from '../Hooks/Auth';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { loading, error, success, updatePassword } = Auth();

  const handleUpdatePassword = () => {
    updatePassword(oldPassword, newPassword);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUpdatePassword();
    }
  }

  return (
    <div className='flex flex-col space-y-2'>
      <div className="flex justify-center items-center pt-4">  
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      </div>
      <div className="flex justify-center items-center pt-4">
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      </div>
      <button onClick={handleUpdatePassword} disabled={loading}>
        Update Password
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Password updated successfully</p>}
    </div>
  );
};

export default ChangePassword;