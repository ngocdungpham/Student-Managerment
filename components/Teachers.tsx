import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Mail, Phone } from 'lucide-react';

type Teacher = {
  id: string;
  name: string;
  code: string;
  subject: string;
  class: string;
  email: string;
  phone: string;
  status: string;
};

export function Teachers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'Nguyễn Thị Lan',
      code: 'GV001',
      subject: 'Toán',
      class: 'GVCN 10A1',
      email: 'lan.nguyen@school.edu.vn',
      phone: '0912345001',
      status: 'Đang dạy',
    },
    {
      id: '2',
      name: 'Trần Văn Minh',
      code: 'GV002',
      subject: 'Văn',
      class: 'GVCN 10A2',
      email: 'minh.tran@school.edu.vn',
      phone: '0912345002',
      status: 'Đang dạy',
    },
    {
      id: '3',
      name: 'Lê Thị Hoa',
      code: 'GV003',
      subject: 'Tiếng Anh',
      class: 'GVCN 11B1',
      email: 'hoa.le@school.edu.vn',
      phone: '0912345003',
      status: 'Đang dạy',
    },
    {
      id: '4',
      name: 'Phạm Văn Tuấn',
      code: 'GV004',
      subject: 'Vật lý',
      class: 'GVCN 11B2',
      email: 'tuan.pham@school.edu.vn',
      phone: '0912345004',
      status: 'Đang dạy',
    },
    {
      id: '5',
      name: 'Hoàng Thị Mai',
      code: 'GV005',
      subject: 'Hóa học',
      class: 'GVCN 12C1',
      email: 'mai.hoang@school.edu.vn',
      phone: '0912345005',
      status: 'Đang dạy',
    },
  ];

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Quản lý giáo viên</h2>
          <p className="text-gray-600">Danh sách và thông tin giáo viên</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Thêm giáo viên
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, mã hoặc môn dạy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-gray-600">
            Tổng số: <span className="text-blue-600">{filteredTeachers.length}</span> giáo viên
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg">
                  {teacher.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg">{teacher.name}</h3>
                  <p className="text-gray-600 text-sm">{teacher.code}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm">
                  {teacher.subject}
                </span>
              </div>
              <div className="text-gray-700 text-sm">{teacher.class}</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="w-4 h-4" />
                <span className="truncate">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="w-4 h-4" />
                <span>{teacher.phone}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                  {teacher.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Teacher Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl mb-4">Thêm giáo viên mới</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Mã giáo viên</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="GV006"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Họ và tên</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Môn dạy</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Chọn môn dạy</option>
                  <option value="Toán">Toán</option>
                  <option value="Văn">Văn</option>
                  <option value="Anh">Tiếng Anh</option>
                  <option value="Lý">Vật lý</option>
                  <option value="Hóa">Hóa học</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Lớp chủ nhiệm</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Chọn lớp (nếu có)</option>
                  <option value="10A1">10A1</option>
                  <option value="11B2">11B2</option>
                  <option value="12C3">12C3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@school.edu.vn"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Số điện thoại</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0912345678"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-gray-600 mb-1">Địa chỉ</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Nhập địa chỉ"
                ></textarea>
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
