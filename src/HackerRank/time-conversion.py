# Time Conversion (easy)

# https://www.hackerrank.com/challenges/three-month-preparation-kit-time-conversion/problem

# Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

# Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
# - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

# Example 1:
# Input: s = '12:01:00PM'
# Output: '12:01:00'

# Example 2:
# Input: s = '12:01:00AM'
# Output: '00:01:00'


def timeConversion(s):
    timeComponents = s.split(":")
    hour = timeComponents[0]
    minute = timeComponents[1]
    second = timeComponents[2][:-2]

    if "AM" in s:
        if hour == "12":
            hour = "00"
    if "PM" in s:
        if hour != "12":
            hourNum = int(hour)
            hourNum += 12
            hour = str(hourNum)

    militaryTime = "{}:{}:{}".format(hour, minute, second)
    return militaryTime
