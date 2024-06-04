CKFinder.customConfig = function (config) {
    // Định nghĩa các thay đổi cho cấu hình mặc định ở đây.
    // Để biết danh sách các tùy chọn có sẵn, hãy kiểm tra:
    // http://docs.cksource.com/ckfinder_2.x_api/symbols/CKFinder.config.html

    // Thiết lập đường dẫn của connector
    config.connectorPath = '/ckfinder/core/connector/asp/connector.asp';

    // Thiết lập loại tệp tin được phép tải lên
    config.fileType = '*.*'; // Cho phép tất cả các loại tệp tin

    // Thiết lập đường dẫn của thư mục lưu trữ tệp tin đã tải lên
    config.uploadUrl = '/ckfinder/userfiles/';

    // Thiết lập các tùy chọn khác nếu cần thiết
};
