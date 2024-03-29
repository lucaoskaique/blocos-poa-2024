import React from 'react'
import { Header } from 'flotiq-components-react'
import EventCard from '../components/EventCard'
import FlotiqImage from '../lib/flotiqImage'

const EventCards = ({ events, headerText }) => {
    let featuredIsFound = false
    const isFeatured = (event) => {
        if (new Date(event.date) >= new Date() && !featuredIsFound) {
            featuredIsFound = true
            return true
        }
        return false
    }
    let monthSplitEvents = {}
    events.forEach((event) => {
        const month = new Date(event.date)
        const monthIndex = `${month.getFullYear()}-${month.getMonth() + 1}`
        const monthName = `${month.toLocaleString('en-us', {
            month: 'long',
        })} ${month.getFullYear()}`
        if (typeof monthSplitEvents[monthIndex] === 'undefined') {
            monthSplitEvents[monthIndex] = {
                name: monthName,
                events: [],
            }
        }
        monthSplitEvents[monthIndex].events.push(event)
    })
    monthSplitEvents = Object.values(monthSplitEvents)
    return (
        <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0 justify-center">
            <div className="flex flex-col items-center md:items-center justify-center">
                <Header additionalClasses={['mb-5 text-center !font-normal']}>
                    CALENDÁRIO DE BLOQUINHOS
                    PORTO ALEGRE 2024
                </Header>
                <Header additionalClasses={['mb-5 !font-normal']}>
                    {headerText}
                </Header>
            </div>
            {monthSplitEvents.map((month) => (
                <div key={month.name}>
                    <div className="flex flex-col items-center md:items-center justify-center">
                        <div className="inline-flex items-center justify-center bg-primary mb-8 px-10 py-3 text-white">
                            {month.name}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {month.events.map((event) => (
                            <EventCard
                                featured={isFeatured(event)}
                                name={event.name}
                                headerImage={FlotiqImage.getSrc(
                                    event.image[0],
                                    0,
                                    0
                                )}
                                date={event.date}
                                excerpt={event.excerpt}
                                address={event.address}
                                price={event.price}
                                slug={event.slug}
                                key={event.id}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EventCards
