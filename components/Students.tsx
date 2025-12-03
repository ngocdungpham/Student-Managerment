import { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Filter } from 'lucide-react';

type Student = {
  id: string;
  name: string;
  code: string;
  class: string;
  gender: string;
  dob: string;
  phone: string;
  status: string;
};

export function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const students: Student[] = [
    {
      id: '1',
      name: 'Nguyễn Văn An',
      code: 'HS001',
      class: '10A1',
      gender: 'Nam',
      dob: '15/05/2009',
      phone: '0912345678',
      status: 'Đang học',
    },
    {
      id: '2',
      name: 'Trần Thị Bình',
      code: 'HS002',
      class: '10A1',
      gender: 'Nữ',
      dob: '20/08/2009',
      phone: '0923456789',
      status: 'Đang học',
    },
    {
      id: '3',
      name: 'Lê Văn Cường',
      code: 'HS003',
      class: '11B2',
      gender: 'Nam',
      dob: '10/03/2008',
      phone: '0934567890',
      status: 'Đang học',
    },
    {
      id: '4',
      name: 'Phạm Thị Dung',
      code: 'HS004',
      class: '11B2',
      gender: 'Nữ',
      dob: '25/12/2008',
      phone: '0945678901',
      status: 'Đang học',
    },
    {
      id: '5',
      name: 'Hoàng Văn Em',
      code: 'HS005',
      class: '12C3',
      gender: 'Nam',
      dob: '05/07/2007',
      phone: '0956789012',
      status: 'Đang học',
    },
  ];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Quản lý học sinh</h2>
          <p className="text-gray-600">Danh sách và thông tin học sinh</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Thêm học sinh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc mã học sinh..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <option value="all">Tất cả lớp</option>
              <option value="10A1">10A1</option>
              <option value="11B2">11B2</option>
              <option value="12C3">12C3</option>
            </select>
          </div>
          <div className="text-gray-600">
            Tổng số: <span className="text-blue-600">{filteredStudents.length}</span> học sinh
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Mã HS</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Họ và tên</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Lớp</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Giới tính</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Ngày sinh</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Số điện thoại</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Trạng thái</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">{student.code}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{student.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.gender}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.dob}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{student.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl mb-4">Thêm học sinh mới</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Mã học sinh</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="HS006"
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
                <label className="block text-sm text-gray-600 mb-1">Lớp</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Chọn lớp</option>
                  <option value="10A1">10A1</option>
                  <option value="11B2">11B2</option>
                  <option value="12C3">12C3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Giới tính</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Ngày sinh</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
