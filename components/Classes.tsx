import { useState } from 'react';
import { Plus, Users, UserCheck, Edit, Trash2 } from 'lucide-react';

type Class = {
  id: string;
  name: string;
  grade: string;
  teacher: string;
  students: number;
  room: string;
};

export function Classes() {
  const [showAddModal, setShowAddModal] = useState(false);

  const classes: Class[] = [
    {
      id: '1',
      name: '10A1',
      grade: 'Khối 10',
      teacher: 'Nguyễn Thị Lan',
      students: 42,
      room: 'A101',
    },
    {
      id: '2',
      name: '10A2',
      grade: 'Khối 10',
      teacher: 'Trần Văn Minh',
      students: 40,
      room: 'A102',
    },
    {
      id: '3',
      name: '11B1',
      grade: 'Khối 11',
      teacher: 'Lê Thị Hoa',
      students: 38,
      room: 'B201',
    },
    {
      id: '4',
      name: '11B2',
      grade: 'Khối 11',
      teacher: 'Phạm Văn Tuấn',
      students: 41,
      room: 'B202',
    },
    {
      id: '5',
      name: '12C1',
      grade: 'Khối 12',
      teacher: 'Hoàng Thị Mai',
      students: 35,
      room: 'C301',
    },
    {
      id: '6',
      name: '12C2',
      grade: 'Khối 12',
      teacher: 'Vũ Văn Hùng',
      students: 36,
      room: 'C302',
    },
  ];

  const gradeStats = [
    { grade: 'Khối 10', classes: 2, students: 82 },
    { grade: 'Khối 11', classes: 2, students: 79 },
    { grade: 'Khối 12', classes: 2, students: 71 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Quản lý lớp học</h2>
          <p className="text-gray-600">Danh sách các lớp học và thông tin chi tiết</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Thêm lớp học
        </button>
      </div>

      {/* Grade Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gradeStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg mb-4">{stat.grade}</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Số lớp</span>
                <span className="text-lg">{stat.classes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Tổng học sinh</span>
                <span className="text-lg">{stat.students}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl mb-1">Lớp {classItem.name}</h3>
                <p className="text-gray-600 text-sm">{classItem.grade}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">
                {classItem.room}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-700">
                <UserCheck className="w-4 h-4 text-gray-400" />
                <span className="text-sm">GVCN: {classItem.teacher}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Sĩ số: {classItem.students} học sinh</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                Xem chi tiết
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Class Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl mb-4">Thêm lớp học mới</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Tên lớp</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="10A3"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Khối</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Chọn khối</option>
                  <option value="10">Khối 10</option>
                  <option value="11">Khối 11</option>
                  <option value="12">Khối 12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Giáo viên chủ nhiệm</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Chọn giáo viên</option>
                  <option value="1">Nguyễn Thị Lan</option>
                  <option value="2">Trần Văn Minh</option>
                  <option value="3">Lê Thị Hoa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phòng học</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="A103"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Lưu
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
