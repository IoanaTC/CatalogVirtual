-- --------------------------------------------------------
-- Server:                       127.0.0.1
-- Versiune server:              11.4.0-MariaDB - mariadb.org binary distribution
-- SO server:                    Win64
-- HeidiSQL Versiune:            12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Descarcă structura bazei de date pentru catalogvirtual
CREATE DATABASE IF NOT EXISTS `catalogvirtual` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `catalogvirtual`;

-- Descarcă structura pentru tabelă catalogvirtual.grades
CREATE TABLE IF NOT EXISTS `grades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subjectId` int(11) DEFAULT NULL,
  `studentId` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_subject` (`studentId`,`subjectId`) USING BTREE,
  KEY `subject_id` (`subjectId`) USING BTREE,
  CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `students` (`id`),
  CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8301 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportarea datelor nu a fost selectată.

-- Descarcă structura pentru tabelă catalogvirtual.guardians
CREATE TABLE IF NOT EXISTS `guardians` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent1` varchar(255) DEFAULT NULL,
  `parent2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=601 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportarea datelor nu a fost selectată.

-- Descarcă structura pentru tabelă catalogvirtual.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `guardianId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_Students_Guardians` (`guardianId`) USING BTREE,
  CONSTRAINT `FK_Students_Guardians` FOREIGN KEY (`guardianId`) REFERENCES `guardians` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=701 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportarea datelor nu a fost selectată.

-- Descarcă structura pentru tabelă catalogvirtual.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportarea datelor nu a fost selectată.

-- Descarcă structura pentru tabelă catalogvirtual.teachers
CREATE TABLE IF NOT EXISTS `teachers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportarea datelor nu a fost selectată.

-- Descarcă structura pentru tabelă catalogvirtual.teacher_subject
CREATE TABLE IF NOT EXISTS `teacher_subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacherId` int(11) DEFAULT NULL,
  `subjectId` int(11) DEFAULT NULL,
  `years` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `teacher_subject` (`teacherId`,`subjectId`) USING BTREE,
  KEY `subject_id` (`subjectId`) USING BTREE,
  CONSTRAINT `teacher_subject_ibfk_1` FOREIGN KEY (`teacherId`) REFERENCES `teachers` (`id`),
  CONSTRAINT `teacher_subject_ibfk_2` FOREIGN KEY (`subjectId`) REFERENCES `subjects` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7251 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportarea datelor nu a fost selectată.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
