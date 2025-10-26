document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form reload trang

    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === '') {
        alert('Vui lòng nhập từ khóa tìm kiếm!');
        return;
    }

    // Gửi request đến API Node-RED
    fetch(`http://localhost:1880/timkiem?q=${encodeURIComponent(searchInput)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi kết nối API');
            }
            return response.json(); // Nhận JSON từ API
        })
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = ''; // Xóa kết quả cũ

            if (data.length === 0) {
                resultsDiv.innerHTML = '<p>Không tìm thấy sản phẩm nào!</p>';
            } else {
                data.forEach(product => {
                    const card = document.createElement('div');
                    card.classList.add('product-card');
                    card.innerHTML = `
                        <h3>${product.TENSP}</h3>
                        <p>Giá tiền: ${product.GIATIEN.toLocaleString()} VND</p>
                        <p>Mô tả: ${product.MOTA}</p>
                        <p>Trạng thái: ${product.DANHSACH}</p>
                    `;
                    resultsDiv.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
            document.getElementById('results').innerHTML = '<p>Có lỗi khi kết nối API. Vui lòng thử lại!</p>';
        });
});