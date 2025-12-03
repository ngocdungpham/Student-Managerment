import { useState } from 'react';
import { Download, FileText, TrendingUp, Users, Award } from 'lucide-react';

export function Reports() {
  const [selectedReportType, setSelectedReportType] = useState('academic');

  const reportTypes = [
    { id: 'academic', label: 'Báo cáo học tập', icon: <Award className="w-5 h-5" /> },
    { id: 'attendance', label: 'Báo cáo điểm danh', icon: <Users className="w-5 h-5" /> },
    { id: 'statistics', label: 'Thống kê tổng hợp', icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const savedReports = [
    {
      name: 'Báo cáo kết quả học tập HK1 - Năm 2024',
      type: 'Học tập',
      date: '01/12/2024',
      size: '2.4 MB',
    },
    {
      name: 'Thống kê điểm danh tháng 11/2024',
      type: 'Điểm danh',
      date: '30/11/2024',
      size: '1.8 MB',
    },
    {
      name: 'Báo cáo tổng hợp chất lượng giáo dục',
      type: 'Thống kê',
      date: '25/11/2024',
      size: '3.2 MB',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-2">Báo cáo & Thống kê</h2>
        <p className="text-gray-600">Tạo và xem các báo cáo về hoạt động nhà trường</p>
      </div>

      {/* Report Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedReportType(type.id)}
            className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all ${
              selectedReportType === type.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-100 hover:border-blue-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-lg ${
                  selectedReportType === type.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {type.icon}
              </div>
              <span className={selectedReportType === type.id ? 'text-blue-900' : 'text-gray-700'}>
                {type.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Generate Report Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg mb-4">Tạo báo cáo mới</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Loại báo cáo</label>
            <select
              value={selectedReportType}
              onChange={(e) => setSelectedReportType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="academic">Học tập</option>
              <option value="attendance">Điểm danh</option>
              <option value="statistics">Thống kê</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Khoảng thời gian</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="current">Học kỳ hiện tại</option>
              <option value="month">Tháng này</option>
              <option value="quarter">Quý này</option>
              <option value="year">Năm học</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Khối lớp</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">Toàn trường</option>
              <option value="10">Khối 10</option>
              <option value="11">Khối 11</option>
              <option value="12">Khối 12</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Định dạng</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="word">Word</option>
            </select>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <FileText className="w-5 h-5" />
          Tạo báo cáo
        </button>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Tổng số báo cáo</div>
          <div className="text-3xl mb-2">24</div>
          <div className="text-green-600 text-sm">+3 trong tháng này</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Báo cáo học tập</div>
          <div className="text-3xl mb-2">12</div>
          <div className="text-blue-600 text-sm">50% tổng báo cáo</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Báo cáo điểm danh</div>
          <div className="text-3xl mb-2">8</div>
          <div className="text-blue-600 text-sm">33% tổng báo cáo</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-gray-600 text-sm mb-1">Thống kê khác</div>
          <div className="text-3xl mb-2">4</div>
          <div className="text-blue-600 text-sm">17% tổng báo cáo</div>
        </div>
      </div>

      {/* Saved Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg">Báo cáo đã lưu</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Tên báo cáo</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Loại</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Ngày tạo</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Kích thước</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {savedReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.size}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100 transition-colors flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Tải xuống
                    </button>
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
