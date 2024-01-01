import React from "react";
import Chat from './Wiget componemt/Chat';
import Group from './Wiget componemt/Group';
import Message from './Wiget componemt/Message';

const Wiget = () => {
  return (
    <div className="wiget">
      <div className="allWiget">
       {/* message componemt */}
<Chat/>
       {/* groups componemt */}
<Group/>
       {/* Chat componemt  */}
       <Message/>
      </div>
    </div>
  );
};

export default Wiget;
