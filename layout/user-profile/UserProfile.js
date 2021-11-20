import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../login/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './UserProfile.css';
import NavBar from "../navbar/NavBar";

function UserProfile(){

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <NavBar />
    <div className='profile-card'>
      <Card className='card' style={{width: '40rem'}}>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link className='btn btn-primary w-100 mt-3' to="/update-profile">
            Update Profile
          </Link>
        </Card.Body>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </Card>
    </div>
    </>
  )
}

export default UserProfile;