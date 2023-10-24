function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / CGNUSL v1.2 - github.com/cgnusl";
    } else {
        process.stdout.write('\x1b]2;' + x + " İf you have a problem contact from dc cgnusl/Bir sorun bulduysanız dcden ulaşın cgnusl" + '\x1b\x5c');
    }
}

module.exports = console_title;
