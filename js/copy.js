function copyText(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('已复制文本: ' + text);
    }, function(err) {
        alert('复制失败: ' + err);
    });
}
