import { SCHEDULE } from '../../constants/event';

/**
 * Schedule section with timeline
 * - Vertical timeline layout
 * - Time slots with session details
 * - Category tags
 */
export default function Schedule() {
    return (
        <section id="schedule" className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Event Schedule
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A full day of insights, connections, and inspiration awaits you.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

                    {/* Schedule items */}
                    <div className="space-y-6 md:space-y-8">
                        {SCHEDULE.map((item, index) => (
                            <ScheduleItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ScheduleItem({ time, title, description, tags }) {
    return (
        <div className="relative pl-12 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow" />

            {/* Content card */}
            <div className="bg-gray-light rounded-xl p-4 md:p-6 hover:shadow-md transition-shadow">
                {/* Time */}
                <p className="text-sm font-semibold text-accent mb-2">{time}</p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block px-3 py-1 text-xs font-medium bg-white text-gray-600 rounded-full border border-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
