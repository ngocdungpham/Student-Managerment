import { useState } from 'react';
import { Search, Filter, Download, Upload } from 'lucide-react';

type Grade = {
  studentCode: string;
  studentName: string;
  class: string;
  subject: string;
  midterm: number;
  final: number;
  average: number;
  rank: string;
};

export function Grades() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');

  const grades: Grade[] = [
    {
      studentCode: 'HS001',
      studentName: 'Nguyễn Văn An',
      class: '10A1',
      subject: 'Toán',
      midterm: 8.5,
      final: 9.0,
      average: 8.8,
      rank: 'Giỏi',
    },
    {
      studentCode: 'HS001',
      studentName: 'Nguyễn Văn An',
      class: '10A1',
      subject: 'Văn',
      midterm: 7.5,
      final: 8.0,
      average: 7.8,
      rank: 'Khá',
    },
    {
      studentCode: 'HS002',
      studentName: 'Trần Thị Bình',
      class: '10A1',
      subject: 'Toán',
      midterm: 9.0,
      final: 9.5,
      average: 9.3,
      rank: 'Giỏi',
    },
    {
      studentCode: 'HS002',
      studentName: 'Trần Thị Bình',
      class: '10A1',
      subject: 'Văn',
      midterm: 8.0,
      final: 8.5,
      average: 8.3,
      rank: 'Giỏi',
    },
    {
      studentCode: 'HS003',
      studentName: 'Lê Văn Cường',
      class: '11B2',
      subject: 'Toán',
      midterm: 7.0,
      final: 7.5,
      average: 7.3,
      rank: 'Khá',
    },
  ];

  const filteredGrades = grades.filter((grade) => {
    const matchesSubject = selectedSubject === 'all' || grade.subject === selectedSubject;
    const matchesClass = selectedClass === 'all' || grade.class === selectedClass;
    return matchesSubject && matchesClass;
  });

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'Giỏi':
        return 'bg-green-100 text-green-700';
      case 'Khá':
        return 'bg-blue-100 text-blue-700';
      case 'Trung bình':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-2">Quản lý điểm số</h2>
          <p className="text-gray-600">Xem và quản lý điểm học tập của học sinh</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors">
            <Upload className="w-5 h-5" />
            Nhập điểm
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5" />
            Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm học sinh..."
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
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="all">Tất cả môn</option>
              <option value="Toán">Toán</option>
              <option value="Văn">Văn</option>
              <option value="Anh">Tiếng Anh</option>
              <option value="Lý">Vật lý</option>
              <option value="Hóa">Hóa học</option>
            </select>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="hk1">Học kỳ 1</option>
            <option value="hk2">Học kỳ 2</option>
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Điểm trung bình</div>
          <div className="text-2xl mb-1">8.2</div>
          <div className="text-green-600 text-sm">+0.3 so với kỳ trước</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Học sinh giỏi</div>
          <div className="text-2xl mb-1">156</div>
          <div className="text-blue-600 text-sm">42% tổng số</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Học sinh khá</div>
          <div className="text-2xl mb-1">189</div>
          <div className="text-blue-600 text-sm">51% tổng số</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Cần cải thiện</div>
          <div className="text-2xl mb-1">26</div>
          <div className="text-orange-600 text-sm">7% tổng số</div>
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Mã HS</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Họ và tên</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Lớp</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Môn học</th>
                <th className="px-6 py-3 text-center text-sm text-gray-600">Giữa kỳ</th>
                <th className="px-6 py-3 text-center text-sm text-gray-600">Cuối kỳ</th>
                <th className="px-6 py-3 text-center text-sm text-gray-600">Trung bình</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Xếp loại</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredGrades.map((grade, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">{grade.studentCode}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{grade.studentName}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {grade.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{grade.subject}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{grade.midterm}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">{grade.final}</td>
                  <td className="px-6 py-4 text-center text-sm">{grade.average}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded ${getRankColor(grade.rank)}`}>
                      {grade.rank}
                    </span>
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
