def format_report(title, count, data):
    precision = data.get('precision', 2)
    rate = count / max(data.get('total', 1), 1) * 100
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{precision}f}%"
    details = data.get('details', [])
    report += f" Details: {', '.join(map(str, details))}"
    return report