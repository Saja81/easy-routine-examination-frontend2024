import * as React from "react"
import Layout from "../components/Layout"
import CalendarComponent from "../components/CalendarComponent"
import BookingCalendarComponent from "../components/BookingCalendarComponent"

const BookingApp = () => (
  <Layout>
    {/* <CalendarComponent /> */}
    <BookingCalendarComponent />
  </Layout>
)
export default BookingApp
