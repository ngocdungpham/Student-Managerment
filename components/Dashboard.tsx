import { Users, BookOpen, UserCheck, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      label: 'Tổng số học sinh',
      value: '1,234',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      label: 'Số lớp học',
      value: '45',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-green-500',
      change: '+3%',
    },
    {
      label: 'Giáo viên',
      value: '87',
      icon: <UserCheck className="w-8 h-8" />,
      color: 'bg-purple-500',
      change: '+5%',
    },
    {
      label: 'Tỉ lệ đạt',
      value: '92.5%',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-orange-500',
      change: '+2.5%',
    },
  ];

  const recentActivities = [
    { time: '10:30', event: 'Học sinh Nguyễn Văn A được thêm vào lớp 10A1' },
    { time: '09:15', event: 'Cập nhật điểm học kỳ 1 cho lớp 12B2' },
    { time: '08:45', event: 'Giáo viên Trần Thị B đã điểm danh lớp 11C3' },
    { time: '08:00', event: 'Thêm mới lịch thi cuối kỳ' },
  ];

  const upcomingEvents = [
    { date: '15/12', event: 'Họp phụ huynh học kỳ 1', class: 'Toàn trường' },
    { date: '20/12', event: 'Thi học kỳ 1 - Môn Toán', class: 'Khối 10' },
    { date: '22/12', event: 'Thi học kỳ 1 - Môn Văn', class: 'Khối 11' },
    { date: '25/12', event: 'Lễ Giáng sinh', class: 'Toàn trường' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-2">Tổng quan</h2>
        <p className="text-gray-600">Chào mừng đến với hệ thống quản lý học sinh</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl mb-1">{stat.value}</p>
                <p className="text-green-600 text-sm">{stat.change} so với tháng trước</p>
              </div>
              <div className={`${stat.color} text-white p-4 rounded-lg`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg mb-4">Hoạt động gần đây</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="text-blue-600 text-sm min-w-[50px]">{activity.time}</div>
                <div className="text-gray-700 text-sm">{activity.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg mb-4">Sự kiện sắp tới</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm min-w-[60px] text-center">
                  {event.date}
                </div>
                <div className="flex-1">
                  <div className="text-gray-900 text-sm">{event.event}</div>
                  <div className="text-gray-500 text-xs mt-1">{event.class}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Class Performance Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg mb-4">Kết quả học tập theo khối</h3>
        <div className="space-y-4">
          {[
            { grade: 'Khối 10', excellent: 35, good: 45, average: 18, weak: 2 },
            { grade: 'Khối 11', excellent: 38, good: 42, average: 16, weak: 4 },
            { grade: 'Khối 12', excellent: 42, good: 40, average: 15, weak: 3 },
          ].map((data, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{data.grade}</span>
                <span className="text-sm text-gray-600">100%</span>
              </div>
              <div className="flex h-8 rounded-lg overflow-hidden bg-gray-100">
                <div
                  className="bg-green-500 flex items-center justify-center text-white text-xs"
                  style={{ width: `${data.excellent}%` }}
                >
                  {data.excellent}%
                </div>
                <div
                  className="bg-blue-500 flex items-center justify-center text-white text-xs"
                  style={{ width: `${data.good}%` }}
                >
                  {data.good}%
                </div>
                <div
                  className="bg-yellow-500 flex items-center justify-center text-white text-xs"
                  style={{ width: `${data.average}%` }}
                >
                  {data.average}%
                </div>
                <div
                  className="bg-red-500 flex items-center justify-center text-white text-xs"
                  style={{ width: `${data.weak}%` }}
                >
                  {data.weak}%
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 mt-6 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-sm text-gray-600">Giỏi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-600">Khá</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-sm text-gray-600">Trung bình</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-sm text-gray-600">Yếu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
