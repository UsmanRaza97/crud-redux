import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { GetContacts, Auth, SearchAction } from "../Redux/Actions"
import { baseUrl } from "./apiServices"
import { withRouter } from "react-router-dom"

const App = (props) => {
  const { contacts = [] } = props
  useEffect(() => {
    console.log("props of home are", props)
  })
  const [singleContact, setSingleContacts] = useState()
  const [input, setInput] = useState("")
  const [Email, setEmail] = useState("")
  const headers = JSON.parse(localStorage.getItem("headers"))
  const getSingleContact = () => {
    console.log("clicked", headers)
    axios
      .get("https://staging-api.20miles.us/api/contacts/ymvb8u99", {
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
      .post(`${baseUrl}.json`, body, {
        headers: headers,
      })
      .then((res) => console.log("add contact response", res))
      .catch((err) => console.log("add contact error", err))
  }

  const updateContact = (key) => {
    console.log("update contact ate", key, headers)
    const body = {
      company_id: 2372,
      email: "cde@evolverstech.com",
      firstname: "rani",
      lastname: "ganja",
    }
    axios
      .put(`${baseUrl}/${key}.json`, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res)
        props.getContacts()
      })
      .catch((err) => console.log(err))
  }

  const handleDelete = (key) => {
    console.log("handle delete", key, headers)
    axios
      .delete(`${baseUrl}/${key}.json`, {
        headers: headers,
      })
      .then((res) => {
        console.log("delete contact", res)
        props.getContacts()
      })
      .catch((err) => {
        console.log("error is ", err)
      })
  }

  const logoutHandler = () => {
    console.log("logout handler is ")
    localStorage.removeItem("headers")
    props.auth()
    props.history.push("/")
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const hanldeSearch = () => {
    props.search(input)
  }
  return (
    <div className="container">
      <div className="col-12" style={{ marginTop: 20 }}>
        <button className="btn btn-success" onClick={() => props.getContacts()}>
          fetch contacts
        </button>
        <button
          style={{ marginLeft: 10 }}
          className="btn btn-primary"
          onClick={getSingleContact}
        >
          get Single Contact
        </button>
        <button
          style={{ marginLeft: 10 }}
          className="btn btn-danger"
          onClick={addContact}
        >
          Add Contact
        </button>

        <button
          style={{ marginLeft: 10 }}
          className="btn btn-danger"
          onClick={logoutHandler}
        >
          logout
        </button>
      </div>
      {contacts.map((contact) => (
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
            update
          </button>
        </li>
      ))}
      <div style={{ display: "flex", marginTop: 10, flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control"
            id="usr"
            onChange={handleChange}
          />
          <button
            style={{ marginLeft: 10 }}
            className="btn btn-danger"
            onClick={hanldeSearch}
          >
            search
          </button>
        </div>
        {props.searchList.map((contact) => (
          <div
            key={contact.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              justifyContent: "space-between",
              marginTop: 10,
              borderBottom: "1px solid gray",
              alignItems: "center",
              padding: 10,
              width: "95%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {contact.firstname}-{contact.lastname}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button type="button" class="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <li>{singleContact}</li> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    searchList: state.searched,
  }
}
const mapdispatchToProps = (dispatch) => {
  return {
    getContacts: () => dispatch(GetContacts()),
    auth: () => dispatch(Auth()),
    search: (keyword) => dispatch(SearchAction(keyword)),
  }
}

export default connect(mapStateToProps, mapdispatchToProps)(withRouter(App))
