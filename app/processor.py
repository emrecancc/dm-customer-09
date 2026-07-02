import re


def parse_line(line):
    m = re.match(r'(\w+)=(\d+)', line)
    if m:
        return m.group(1), int(m.group(2))
    return None
