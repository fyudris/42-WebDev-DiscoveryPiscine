#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

#define RED "\033[91m"
#define END "\033[0m"

#define HEART '@'
#define HEART_SIZE 2.0

char *text = "                     Happy Valentine's Day!";
char output[30][60];

void delay(float seconds) {
    usleep((int)(seconds * 1000000));
}

void generate_heart() {
    for (int y = 15; y >= -15; y--) {
        for (int x = -30; x < 30; x++) {
            if (((x * 0.04 * HEART_SIZE) * (x * 0.04 * HEART_SIZE) + (y * 0.1 * HEART_SIZE) * (y * 0.1 * HEART_SIZE) - 1) *
                ((x * 0.04 * HEART_SIZE) * (x * 0.04 * HEART_SIZE) + (y * 0.1 * HEART_SIZE) * (y * 0.1 * HEART_SIZE) - 1) *
                ((x * 0.04 * HEART_SIZE) * (x * 0.04 * HEART_SIZE) + (y * 0.1 * HEART_SIZE) * (y * 0.1 * HEART_SIZE) - 1) -
                (x * 0.04 * HEART_SIZE) * (x * 0.04 * HEART_SIZE) * (y * 0.1 * HEART_SIZE) * (y * 0.1 * HEART_SIZE) * (y * 0.1 * HEART_SIZE) <= 0) {
                output[15 - y][x + 30] = HEART;
            } else {
                output[15 - y][x + 30] = ' ';
            }
        }
    }
}

void main_function() {
    printf(RED);
    printf("\n");

    for (int i = 0; i < strlen(text); i++) {
        printf("%c", text[i]);
        fflush(stdout);
        delay(0.1);
    }

    printf("\n");
    printf("==========================================================================\n");

    for (int j = 0; j < 2; j++) {
        printf("\n");
    }

    for (int i = 0; i < 30; i++) {
        int isEmpty = 1;
        for (int j = 0; j < 60; j++) {
            if (output[i][j] != ' ') {
                isEmpty = 0;
                break;
            }
        }
        if (isEmpty) continue;

        for (int j = 0; j < 60; j++) {
            printf("%c", output[i][j]);
            fflush(stdout);
            delay(0.02);
        }
        printf("\n");
    }

    printf("\n");
    printf(END);
}

int main() {
    generate_heart();
    main_function();
    return 0;
}
