import React from 'react';

function AdminLogin() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login Amministratore</h2>
          <form>
            <div className="form-group">
              <label htmlFor="admin-cf">Codice Fiscale</label>
              <input type="text" className="form-control" id="admin-cf" placeholder="Inserisci codice fiscale" />
            </div>
            <div className="form-group">
              <label htmlFor="admin-password">Password</label>
              <input type="password" className="form-control" id="admin-password" placeholder="Inserisci password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
