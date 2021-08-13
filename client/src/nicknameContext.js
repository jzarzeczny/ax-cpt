import React, { useState } from "react";

const NicknameContext = React.createContext([{}, () => {}]);

const NickNameProvider = ({ children }) => {
  const [nickname, setNickname] = useState({});
  return (
    <NicknameContext.Provider value={[nickname, setNickname]}>
      {children}
    </NicknameContext.Provider>
  );
};
export { NicknameContext, NickNameProvider };
