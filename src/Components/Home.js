import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { GetContacts } from "../Redux/Actions"
const App = (props) => {
  useEffect(() => console.log("props of home are", props))
  const [singleContact, setSingleContacts] = useState()
  const headers = JSON.parse(localStorage.getItem("headers"))
  const getSingleContact = () => {
    console.log("clicked", headers)
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
    console.log("clicked", headers)
    const body = {
      company_id: 2372,
      email: "usmanraza@evolverstech.com",
      firstname: "usman",
      lastname: "raza",
    }
    axios
      .post("https://staging-api.20miles.us/api/contacts.json", body, {
        headers: headers,
      })
      .then((res) => console.log("add contact response", res))
      .catch((err) => console.log("add contact error", err))
  }

  const updateContact = (key) => {
    console.log("update contact ate", key, headers)
    const body = {
      company_id: 2372,
      email: "usmanraza@evolverstech.com",
      firstname: "usman",
      lastname: "raza",
    }
    axios
      .put(
        "https://staging-api.20miles.us/api/contacts/" + key + ".json",
        body,
        {
          headers: headers,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const handleDelete = (key) => {
    console.log("handle delete", key, headers)
    axios
      .delete("https://staging-api.20miles.us/api/contacts/" + key + ".json", {
        headers: headers,
      })
      .then((res) => {
        console.log("delete contact", res)
      })
      .catch((err) => {
        console.log("error is ", err)
      })
  }

  return (
    <div>
      <button onClick={() => props.getContacts()}>fetch contacts</button>
      <button onClick={getSingleContact}>get Single Contact</button>
      <button onClick={addContact}>Add Contact</button>

      {props.contacts.map((contact) => (
        <li key={contact.id}>
          {contact.lastname}
          <button
            onClick={() => handleDelete(contact.key)}
            style={{ marginLeft: 20 }}
          >
            Delete
          </button>
          <button
            onClick={() => updateContact(contact.key)}
            style={{ marginLeft: 20 }}
          >
            Edit
          </button>
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
