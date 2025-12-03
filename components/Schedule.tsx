import { useState } from 'react';
import { Filter, Download } from 'lucide-react';

type ScheduleItem = {
  period: number;
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
};

export function Schedule() {
  const [selectedClass, setSelectedClass] = useState('10A1');

  const schedules: ScheduleItem[] = [
    {
      period: 1,
      time: '7:00 - 7:45',
      monday: 'Toán',
      tuesday: 'Văn',
      wednesday: 'Anh',
      thursday: 'Lý',
      friday: 'Hóa',
      saturday: 'Sinh',
    },
    {
      period: 2,
      time: '7:50 - 8:35',
      monday: 'Toán',
      tuesday: 'Văn',
      wednesday: 'Anh',
      thursday: 'Lý',
      friday: 'Hóa',
      saturday: 'Sinh',
    },
    {
      period: 3,
      time: '8:40 - 9:25',
      monday: 'Văn',
      tuesday: 'Anh',
      wednesday: 'Toán',
      thursday: 'Hóa',
      friday: 'Lý',
      saturday: 'GDCD',
    },
    {
      period: 4,
      time: '9:40 - 10:25',
      monday: 'Văn',
      tuesday: 'Anh',
      wednesday: 'Toán',
      thursday: 'Hóa',
      friday: 'Lý',
      saturday: 'GDCD',
    },
    {
      period: 5,
      time: '10:30 - 11:15',
      monday: 'Anh',
      tuesday: 'Lý',
      wednesday: 'Văn',
      thursday: 'Toán',
      friday: 'Sinh',
      saturday: '-',
    },
  ];

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      Toán: 'bg-blue-100 text-blue-700',
      Văn: 'bg-purple-100 text-purple-700',
      Anh: 'bg-green-100 text-green-700',
      Lý: 'bg-orange-100 text-orange-700',
      Hóa: 'bg-pink-100 text-pink-700',
      Sinh: 'bg-teal-100 text-teal-700',
      GDCD: 'bg-yellow-100 text-yellow-700',
    };
    return colors[subject] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Thời khóa biểu</h2>
          <p className="text-gray-600">Xem và quản lý lịch học các lớp</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Download className="w-5 h-5" />
          Xuất TKB
        </button>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="10A1">Lớp 10A1</option>
              <option value="10A2">Lớp 10A2</option>
              <option value="11B1">Lớp 11B1</option>
              <option value="11B2">Lớp 11B2</option>
              <option value="12C1">Lớp 12C1</option>
            </select>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="1">Học kỳ 1</option>
            <option value="2">Học kỳ 2</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="2024">Năm học 2024-2025</option>
            <option value="2023">Năm học 2023-2024</option>
          </select>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg">Thời khóa biểu lớp {selectedClass}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Tiết
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Giờ học
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Thứ 2
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Thứ 3
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Thứ 4
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Thứ 5
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600 border-r border-gray-200">
                  Thứ 6
                </th>
                <th className="px-4 py-3 text-center text-sm text-gray-600">Thứ 7</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((item) => (
                <tr key={item.period} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-4 text-center border-r border-gray-200">
                    {item.period}
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-600 border-r border-gray-200">
                    {item.time}
                  </td>
                  <td className="px-4 py-4 text-center border-r border-gray-200">
                    <span className={`px-3 py-1 rounded ${getSubjectColor(item.monday)}`}>
                      {item.monday}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center border-r border-gray-200">
                    <span className={`px-3 py-1 rounded ${getSubjectColor(item.tuesday)}`}>
                      {item.tuesday}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center border-r border-gray-200">
                    <span className={`px-3 py-1 rounded ${getSubjectColor(item.wednesday)}`}>
                      {item.wednesday}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center border-r border-gray-200">
                    <span className={`px-3 py-1 rounded ${getSubjectColor(item.thursday)}`}>
                      {item.thursday}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center border-r border-gray-200">
                    <span className={`px-3 py-1 rounded ${getSubjectColor(item.friday)}`}>
                      {item.friday}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    {item.saturday !== '-' ? (
                      <span className={`px-3 py-1 rounded ${getSubjectColor(item.saturday)}`}>
                        {item.saturday}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-sm mb-3">Chú thích môn học:</h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Toán',
            'Văn',
            'Anh',
            'Lý',
            'Hóa',
            'Sinh',
            'GDCD',
          ].map((subject) => (
            <span key={subject} className={`px-3 py-1 rounded text-sm ${getSubjectColor(subject)}`}>
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
