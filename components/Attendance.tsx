import { useState } from 'react';
import { Calendar, Check, X, Clock, Filter } from 'lucide-react';

type AttendanceRecord = {
  studentCode: string;
  studentName: string;
  class: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  note?: string;
};

export function Attendance() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('10A1');

  const attendanceRecords: AttendanceRecord[] = [
    {
      studentCode: 'HS001',
      studentName: 'Nguyễn Văn An',
      class: '10A1',
      date: '2024-12-03',
      status: 'present',
    },
    {
      studentCode: 'HS002',
      studentName: 'Trần Thị Bình',
      class: '10A1',
      date: '2024-12-03',
      status: 'present',
    },
    {
      studentCode: 'HS003',
      studentName: 'Lê Văn Cường',
      class: '10A1',
      date: '2024-12-03',
      status: 'late',
      note: 'Đến muộn 15 phút',
    },
    {
      studentCode: 'HS004',
      studentName: 'Phạm Thị Dung',
      class: '10A1',
      date: '2024-12-03',
      status: 'absent',
      note: 'Ốm, có đơn xin phép',
    },
    {
      studentCode: 'HS005',
      studentName: 'Hoàng Văn Em',
      class: '10A1',
      date: '2024-12-03',
      status: 'present',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'absent':
        return <X className="w-5 h-5 text-red-600" />;
      case 'late':
        return <Clock className="w-5 h-5 text-orange-600" />;
      case 'excused':
        return <Check className="w-5 h-5 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present':
        return 'Có mặt';
      case 'absent':
        return 'Vắng';
      case 'late':
        return 'Đi muộn';
      case 'excused':
        return 'Có phép';
      default:
        return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-700';
      case 'absent':
        return 'bg-red-100 text-red-700';
      case 'late':
        return 'bg-orange-100 text-orange-700';
      case 'excused':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const stats = {
    present: attendanceRecords.filter((r) => r.status === 'present').length,
    absent: attendanceRecords.filter((r) => r.status === 'absent').length,
    late: attendanceRecords.filter((r) => r.status === 'late').length,
    total: attendanceRecords.length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Điểm danh học sinh</h2>
          <p className="text-gray-600">Quản lý và theo dõi điểm danh hàng ngày</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="10A1">10A1</option>
              <option value="10A2">10A2</option>
              <option value="11B1">11B1</option>
              <option value="11B2">11B2</option>
              <option value="12C1">12C1</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Lưu điểm danh
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Tổng số</p>
              <p className="text-2xl">{stats.total}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Có mặt</p>
              <p className="text-2xl">{stats.present}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Check className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Vắng</p>
              <p className="text-2xl">{stats.absent}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <X className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Đi muộn</p>
              <p className="text-2xl">{stats.late}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Mã HS</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Họ và tên</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Lớp</th>
                <th className="px-6 py-3 text-center text-sm text-gray-600">Trạng thái</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Ghi chú</th>
                <th className="px-6 py-3 text-center text-sm text-gray-600">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">{record.studentCode}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{record.studentName}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {record.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(record.status)}
                      <span className={`px-2 py-1 rounded ${getStatusColor(record.status)}`}>
                        {getStatusText(record.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.note || '-'}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2 justify-center">
                      <button className="px-3 py-1 bg-green-50 text-green-600 rounded hover:bg-green-100 text-xs">
                        Có mặt
                      </button>
                      <button className="px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 text-xs">
                        Vắng
                      </button>
                      <button className="px-3 py-1 bg-orange-50 text-orange-600 rounded hover:bg-orange-100 text-xs">
                        Muộn
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
