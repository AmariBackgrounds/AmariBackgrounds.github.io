import React from 'react';
import 'bulma';
import '../App.css';
import { Link } from 'react-router-dom';

const Sidebar = (props: any) => {
  return (
    <div>
      <aside className="dash-menu">
        <p className="menu-label">
          {window.supabase.auth.user()?.user_metadata.full_name}
        </p>
        <ul className="menu-list">
          <li
          className={`${props.page === 'user-info' ? 'has-background-white-ter' : ''}`}
          style={props.page === 'user-info' ? { borderRadius: '5px' } : {}}
          >
            <Link to="/user-info">User Info</Link>
          </li>

          <li
          className={`${props.page === 'player-info' ? 'has-background-white-ter' : ''}`}
          style={props.page === 'player-info' ? { borderRadius: '5px' } : {}}
          >
            <Link to="/player-info">Player Info</Link>
          </li>

          <li
          className={`${props.page === 'game-logs' ? 'has-background-white-ter' : ''}`}
          style={props.page === 'game-logs' ? { borderRadius: '5px' } : {}}
          >
            <Link to="/game-logs">Game Logs</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
