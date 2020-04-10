import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { GetContacts } from "../Redux/Actions"
const App = (props) => {
  useEffect(() => console.log("props of home are", props))
  const [singleContact, setSingleContacts] = useState()

  const getSingleContact = () => {
    console.log("clicked")
    const headers = JSON.parse(localStorage.getItem("headers"))
    axios
      .get("https://staging-api.20miles.us/api/contacts/pcjkkket", {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data.contact.lastname)
        const singleContact = res.data.contact.lastname
        setSingleContacts(singleContact)
      })
      .catch((err) => console.log(err))
  }

  const addContact = () => {
    console.log("clicked")
    const body = {
      company_id: 2372,
      email: "usmanraza@evolverstech.com",
      firstname: "usman",
      lastname: "raza",
    }
    const headers = JSON.parse(localStorage.getItem("headers"))
    axios
      .post("https://staging-api.20miles.us/api/contacts.json", body, {
        headers: headers,
      })
      .then((res) => console.log("add contact response", res))
      .catch((err) => console.log("add contact error", err))
  }

  const deleteContact = () => {
    const headers = JSON.parse(localStorage.getItem("headers"))
    console.log("clicked")
    axios
      .delete("https://staging-api.20miles.us/api/contacts/pcjkkket.json", {
        headers: headers,
      })
      .then((res) => {
        console.log(console.log("delete contact"), res)
      })
      .catch((err) => {
        console.log("error is ", err)
      })
  }

  const updateContact = () => {
    const body = {
      company_id: 2372,
      email: "usmanraza@evolverstech.com",
      firstname: "usman",
      lastname: "raza",
    }
    const headers = JSON.parse(localStorage.getItem("headers"))
    axios
      .put("https://staging-api.20miles.us/api/contacts/dsghp25n.json", body, {
        headers: headers,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <button onClick={() => props.getContacts()}>fetch contacts</button>
      <button onClick={getSingleContact}>get Single Contact</button>
      <button onClick={addContact}>Add Contact</button>
      <button onClick={deleteContact}>Delete Contact</button>
      <button onClick={updateContact}>Update Contact</button>

      {props.contacts.map((contact) => (
        <li key={contact.id}>
          {contact.lastname}
          <button style={{ marginLeft: 20 }}>Delete</button>
        </li>
      ))}

      <li>{singleContact}</li>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
}
const mapdispatchToProps = (dispatch) => {
  return {
    getContacts: () => dispatch(GetContacts()),
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(App)
