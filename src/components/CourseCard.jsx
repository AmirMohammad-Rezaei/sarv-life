import { ArrowLeft, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course, index = 0 }) {
  const Icon = course.icon;
  return (
    <article className="course-card">
      <div className="course-card-top"><span className="course-icon"><Icon size={25} /></span><span className="course-number">دوره {String(index + 1).padStart(2, '0')}</span></div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta"><span><Clock3 size={14} /> {course.duration}</span><span>{course.audience}</span></div>
      <Link className="course-link" to="/education#join">مشاهده و ثبت درخواست <ArrowLeft size={16} /></Link>
    </article>
  );
}
